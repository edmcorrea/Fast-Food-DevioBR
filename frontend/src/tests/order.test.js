// import '@testing-library/jest-dom';
import { expect, test, describe } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithContext } from './helpers/renderWithContext';
import App from '../App';



describe('Verifications about Panel Customer Page', () => {

  test('Verify if Customer products Page elements are displayed correctly', async () => {
    // PREPARAÇÂO - RENDERIZAÇÂO DA PÀGINA
    renderWithContext(<App />);

    // BUSCA POR ELEMENTO
    const order = screen.getByRole('link', { name: /pedidos/i });
    const kitchen = screen.getByRole('link', { name: /cozinha/i });
    const status = screen.getByRole('link', { name: /retirada/i });


    // RESULTADOSs
    expect(order).toBeInTheDocument();
    expect(kitchen).toBeInTheDocument();
    expect(status).toBeInTheDocument();

  });
})
