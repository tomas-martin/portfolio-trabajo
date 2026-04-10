# Portfolio — Tomás Martín

## Cómo correr localmente

```bash
npm install
npm run dev
```

## Cómo deployar en Vercel

### Opción 1 — Desde la web (recomendado)

1. Subí esta carpeta a un repositorio nuevo en GitHub:
   - Creá un repo en https://github.com/new (ej: `mi-portfolio`)
   - Ejecutá estos comandos en la carpeta del proyecto:
     ```bash
     git init
     git add .
     git commit -m "Portfolio inicial"
     git remote add origin https://github.com/tomas-martin/mi-portfolio.git
     git push -u origin main
     ```

2. Entrá a https://vercel.com y logueate con tu cuenta de GitHub

3. Hacé click en "Add New Project"

4. Seleccioná el repositorio `mi-portfolio`

5. Vercel detecta automáticamente que es Vite/React. Hacé click en **Deploy**

6. En ~1 minuto tu portfolio estará en `https://mi-portfolio.vercel.app` 🎉

### Opción 2 — Vercel CLI

```bash
npm install -g vercel
vercel
```

## Personalización

Abrí `src/App.jsx` y modificá:
- El arreglo `projects` para editar/agregar proyectos
- El arreglo `skills` para cambiar porcentajes
- La sección "contacto" para agregar tu email o LinkedIn
