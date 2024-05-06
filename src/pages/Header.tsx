// Header.tsx

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import HoverUnderlineText from '../components/hoverUnderlineText';

const Header = () => {
  const navigate = useNavigate();

  const linkStyle = {
    cursor: 'pointer',
    marginLeft: '20px',
    fontFamily: 'Roboto, sans-serif',
    transition: 'text-decoration 0.3s ease',
  };
  
  return (
    <AppBar position="static"
      style={{
        backgroundColor: '#000000d1',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '10vh',
        }}>
          <img src={logo} style={{
            height: '56px',
            display: 'block'
          }}
          alt="logo" />
          <Typography
            style={{
              cursor: 'pointer',
            }}
            variant="h6"
            component="div"
            onClick={() => navigate('/')}
          >
            Finn's Github Page
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
              flex: '1',
              whiteSpace: 'normal',
            }}
          >
            <div
              style={linkStyle}
              onClick={() => navigate('/projects')}
            >
              <HoverUnderlineText text='Projects' uniqueKey={'link 1'} textStyle={linkStyle} />
            </div>
            <div
                style={linkStyle}
                onClick={() => navigate('/about-me')}
            >
                <HoverUnderlineText text='About Me' uniqueKey={'link 2'} textStyle={linkStyle} />
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
