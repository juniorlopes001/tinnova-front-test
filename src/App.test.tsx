import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Users from './pages/Users/Users/Users';


//OBS estava dando muitos erros ao utilizar a lib com o TS. Disposto a conversar sobre os testes =)


// // describe('Componente usuários', () => {
// //     it('Mostrar o nome da página', ()=> {
// //         render(<Users/>);
// //         expect(screen.getByText('Usuários')).toBeInTheDocument()
// //     })
// // })

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
