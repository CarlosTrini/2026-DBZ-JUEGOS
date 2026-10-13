// import { z } from 'zod'
import apiClient from '@/lib/axios'
import type { CharactersResponseApi, PlanetsResponseApi } from '@/types'

// Ejemplo de esquema Zod para validar datos de entrada o respuestas API
// export const ContactSchema = z.object({
//   name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
//   email: z.string().email('Correo electrónico no válido'),
//   message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
// })


// interface StatusResponse {
//   status: string;
//   timestamp: string;
// }

export const apiDbzService = {
  /**
   * Obtener datos de personajes
   */
  async getAllCharacters(pageNumber: number = 0): Promise<CharactersResponseApi> {
    const url = pageNumber == 0 ? '/characters?limit=8' : `/characters?page=${pageNumber}&limit=8`;
    try {
      const response = await apiClient.get(url)
      return response.data
    } catch {
      // return { status: 'mock_active', timestamp: new Date().toISOString() }
      return { items: [], meta: { totalItems: 0, itemCount: 0, itemsPerPage: 0, totalPages: 0, currentPage: 0 }, links: { first: '', previous: '', next: '', last: '' } };
    }
  },
  async getAllPlanets(pageNumber: number = 0): Promise<PlanetsResponseApi> {
    const url = pageNumber == 0 ? '/planets?limit=8' : `/planets?page=${pageNumber}&limit=8`;
    try {
      const response = await apiClient.get(url)
      return response.data
    } catch {
      // return { status: 'mock_active', timestamp: new Date().toISOString() }
      return { items: [], meta: { totalItems: 0, itemCount: 0, itemsPerPage: 0, totalPages: 0, currentPage: 0 }, links: { first: '', previous: '', next: '', last: '' } };
    }
  }

}


