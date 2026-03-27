// components/MailboxFooter.tsx
import { Box, Container, Grid, Typography, IconButton, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

const FooterPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#E6D5B8',
  borderTop: `4px solid ${theme.palette.primary.dark}`,
  borderRadius: '24px 24px 0 0',
  padding: theme.spacing(4, 0),
  marginTop: theme.spacing(8),
}));

export function MailboxFooter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Carta enviada!', { email, message });
  };

  return (
    <FooterPaper elevation={0}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Coluna da esquerda */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h6" sx={{ fontFamily: '"Press Start 2P", monospace', mb: 2 }}>
              📬 CARTEIRO
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Envie uma carta para a Fazenda do Código. Responderei assim que o calcifer aquecer a chaleira!
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <IconButton 
                href="https://github.com" 
                target="_blank" 
                sx={{ backgroundColor: '#F2E8CF', border: '2px solid #8B5A2B' }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                href="https://linkedin.com" 
                target="_blank" 
                sx={{ backgroundColor: '#F2E8CF', border: '2px solid #8B5A2B' }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                href="mailto:email@exemplo.com" 
                sx={{ backgroundColor: '#F2E8CF', border: '2px solid #8B5A2B' }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
          
          {/* Coluna da direita */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="body2" sx={{ mb: 1, fontFamily: 'monospace' }}>
              🕊️ Deixe sua mensagem:
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2, backgroundColor: '#FFF9EF', borderRadius: 2 }}
            />
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ mb: 2, backgroundColor: '#FFF9EF', borderRadius: 2 }}
            />
            <Button
              variant="contained"
              onClick={handleSend}
              startIcon={<span>✉️</span>}
              sx={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.7rem' }}
            >
              ENVIAR CARTA
            </Button>
          </Grid>
        </Grid>
        
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 4, color: 'text.secondary' }}>
          🌾 © 2026 - Fazenda do Código - Todos os pixels reservados 🌟
        </Typography>
      </Container>
    </FooterPaper>
  );
}