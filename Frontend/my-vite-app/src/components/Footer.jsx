// src/components/Footer.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', padding: '1rem', backgroundColor: '#252525' }}>
            <Container>
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} User List App. All rights reserved.
                </Typography>
                <Typography variant="body2" align="center">
                    <Link href="/" target="_self" rel="noopener">
                        Privacy Policy
                    </Link>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
