import { styled } from '@mui/material/styles';

export const Span = styled('span')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#8c69d834',
    borderRadius: '50%',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
})

export const List = styled('ul')({
    lineHeight: '10px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
});

export const ListItem = styled('li')({
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '0.75rem',
});

export const ListIcon = styled('span')({
    width: '1.25rem',
    height: '1.25rem',
    marginRight: '0.5rem',
    display: "flex", alignItems: "center",
});
