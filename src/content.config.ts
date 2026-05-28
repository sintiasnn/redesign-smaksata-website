import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const programs = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/programs' }),
  schema: z.object({
    id: z.string(),
    kode: z.string(),
    singkat: z.string(),
    nama: z.string(),

    bidang: z.string(),
    dayaTampung: z.number(),
    deskripsi: z.string(),
    warna: z.enum(['primary', 'secondary', 'accent']),
    pelajaran: z.array(z.string()),
    fasilitas: z.array(z.string()).optional(),
    prospek: z.array(z.string()),
    pkl: z.array(z.string()),
  }),
})

const berita = defineCollection({
  loader: glob({ pattern: '*.mdx', base: 'src/content/berita' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

const acara = defineCollection({
  loader: glob({ pattern: '*.mdx', base: 'src/content/acara' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    desc: z.string(),
    image: z.string().optional(),
    type: z.enum(['workshop', 'meetup', 'lomba', 'sosialisasi', 'lainnya']).optional(),
  }),
})

export const collections = { programs, berita, acara }
