// MotionViews.ts
import { useCallback, useRef, useEffect, useState } from 'react';
import { animationControls, AnimationControls } from 'framer-motion';

type ViewState = {
  isMounted: boolean;
  isVisible: boolean;
};

type ControlsMap = Record<string, AnimationControls>;
type ObserverMap = Record<string, IntersectionObserver>;

export function useMotionView() {
  const controlsMapRef = useRef<ControlsMap>({});
  const observerMapRef = useRef<ObserverMap>({});

  // Unifica os estados de montagem e de visibilidade
  const [viewMap, setViewMap] = useState<Record<string, ViewState>>({});

  // Função para atualizar o viewMap de forma centralizada
  const updateViewMap = (key: string, newState: Partial<ViewState>) => {
    setViewMap(prev => ({
      ...prev,
      [key]: {
        // Se já existir, preserva o valor atual; caso contrário, assume false
        isMounted: prev[key]?.isMounted ?? false,
        isVisible: prev[key]?.isVisible ?? false,
        ...newState,
      },
    }));
  };

  const register = useCallback((key: string, amount: number = 0.2) => {
    return (node: HTMLElement | null) => {
      console.log(`[REGISTER] key=${key} node=`, node);
      if (node === null) {
        // Quando o elemento é removido, marca como desmontado
        updateViewMap(key, { isMounted: false });
        if (observerMapRef.current[key]) {
          observerMapRef.current[key].disconnect();
          delete observerMapRef.current[key];
        }
        return;
      }
      // Se o elemento existe, marca como montado e inicializa isVisible como false
      updateViewMap(key, { isMounted: true, isVisible: false });

      // Cria os AnimationControls se ainda não existirem para essa key
      if (!controlsMapRef.current[key]) {
        controlsMapRef.current[key] = animationControls();
      }
      // Se já havia um observer, desconecta-o
      if (observerMapRef.current[key]) {
        observerMapRef.current[key].disconnect();
      }
      // Cria e configura um novo observer para o elemento
      observerMapRef.current[key] = new IntersectionObserver(
        ([entry]) => {
          const newVisibility = entry.intersectionRatio >= amount;
          console.log(
            `[OBSERVER] key=${key} - intersectionRatio=${entry.intersectionRatio} | newVisibility=${newVisibility}`
          );
          // Atualiza a visibilidade, mantendo isMounted inalterado
          updateViewMap(key, { isVisible: newVisibility });
        },
        { threshold: amount }
      );
      observerMapRef.current[key].observe(node);
    };
  }, []);

  // Efeito que dispara a animação baseado no estado unificado de viewMap
  useEffect(() => {
    console.log('[EFFECT] viewMap:', viewMap);
    Object.entries(viewMap).forEach(([key, viewState]) => {
      if (viewState.isMounted) {
        const controls = controlsMapRef.current[key];
        if (controls) {
          console.log(
            `[EFFECT] Chamando controls.start para key=${key} com estado: ${viewState.isVisible ? 'visible' : 'hidden'}`
          );
          controls.start(viewState.isVisible ? 'visible' : 'hidden');
        }
      } else {
        console.log(`[EFFECT] Ignorando key=${key} pois não está montado`);
      }
    });
  }, [viewMap]);

  const getControls = useCallback((key: string): AnimationControls | undefined => {
    return controlsMapRef.current[key];
  }, []);

  return { register, getControls };
}
