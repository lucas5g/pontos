import { PontoService } from '@/services/ponto.service';
import { describe, expect, it } from 'vitest';

describe('PontoService', () => {

  const service = new PontoService()

  it('create', () => {
    expect(service.create()).toEqual({ message: 'criado' })
  })


  
})