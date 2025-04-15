import React from 'react';
import { Stack, Typography } from '@mui/material';
import { CheckCircleIcon } from 'lucide-react';
import * as Styled from "./card.styled.ts"

interface CardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  textlist: string;
  isList: boolean;
  listTopic: string[];
}

export default function Card({ icon, title, text, isList, textlist, listTopic  }: CardProps) {

  return (

    <Stack
      bgcolor={!isList ? "#f8f8ff" : "#fff"}
      alignItems="start"
      gap={1.5}
      p={!isList ? "22px" : "20px"}
      borderRadius={"8px"}
      boxShadow={"0 1px 4px rgba(0, 0, 0, 0.1);"
      }>

      {icon && <Styled.Span>{icon}</Styled.Span>}

      <Typography variant="h5" fontWeight={"600"}>{title}</Typography>

      {!isList ? (

        <Typography sx={{ textAlign: 'start', fontSize: 14 }}>
          {text}
        </Typography>

      ) : (
        <>
          <Typography sx={{ textAlign: 'start', fontSize: 14 }}>
            {textlist}
          </Typography>

          <Styled.List>

            {listTopic.map((topic, index) => (

              <Styled.ListItem key={index}>

                <Styled.ListIcon>

                  <CheckCircleIcon size={"1.25rem"} />

                </Styled.ListIcon>

                <Typography sx={{ fontSize: 12 }}>{topic}</Typography>

              </Styled.ListItem>

            ))}

          </Styled.List>
        </>
      )}

    </Stack>


  );
}
