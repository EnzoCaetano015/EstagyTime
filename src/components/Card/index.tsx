import React from 'react';
import { Stack, StackProps, Typography } from '@mui/material';
import * as Styled from "./card.styled.ts"

interface CardProps extends StackProps {
  icon: React.ReactNode;
  title: string;
  text: string;

  textlist: string;
  iconList?: React.ReactNode
  isList: boolean;
  listTopic: string[];
  listIcon: React.ReactNode
}

export default function Card({ icon, title, text, isList, textlist, iconList, listTopic, listIcon, sx, ...rest }: CardProps) {

  return (

    <Stack
      {...rest}
      sx={{
        bgcolor: !isList ? "#f8f8ff" : "#fff",
        alignItems: "start",
        gap: 1.5,
        p: !isList ? "22px" : "20px",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1);",
        ...sx
      }}

    >

      {icon && <Styled.Span>{icon}</Styled.Span>}

      <Typography variant="h5" fontWeight={"600"}>{title}</Typography>

      {!isList ? (

        <Typography sx={{ textAlign: 'start', fontSize: 14 }}>
          {text}
        </Typography>

      ) : (
        <>
          <Typography sx={{ textAlign: 'start', fontSize: 14, display: "flex", alignItems: "center", gap: 1 }}>
            {iconList} {textlist}
          </Typography>

          <Styled.List>

            {listTopic.map((topic, index) => (

              <Styled.ListItem key={index}>

                <Styled.ListIcon>

                  {listIcon}

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
