import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ButtonSection from './components/sections/ButtonSection';

function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      bgcolor: 'background.default',
      py: { xs: 4, md: 8 },
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: 600,
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          UI Test
        </Typography>

        <ButtonSection />

      </Container>
    </Box>
  );
}

export default App;
