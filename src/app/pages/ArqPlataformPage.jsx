
import React from 'react';
import { ArqPlataformLayout } from '../layout/';
import { PaginaEjemplo,ViewsEjemplo } from '../views';

export const ArqPlataformPage = () => {
    return (
        <ArqPlataformLayout>
            <PaginaEjemplo />
            <ViewsEjemplo />
        </ArqPlataformLayout>
    );
}

