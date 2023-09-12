# Creado con [Nextjs13][] y [Typescript][]

Para poder empezar:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abrir [link-local][] con tu navegador para mirar todo el resultado "Gracias".

Estoy usando [Native-piece][] para una mejor experiencia de desarrollo,
ya que soy el creador de esta librería que esta basada en [Styled-components][]
y [Emotion][], de igual manera tengo conocimientos solidos en `styled-components`,
`emotion/styled`, `saas`, `tailwind`, `MUI`, entres otros framework de estilos y
procesadores de estilos

**Estuve jugando con varias paletas de colores para brindar asi una
mejor experiancia de usuario**

## Los colores que se usaron fueron

Los cuales se encuentran en esta pagina: [palettes][]

* first-color: `#42b883`
* second-color: `#347474`
* third-color: `#35495e`
* fourth-color: `#ff7e67`

### Las librerias de terceros que se implementaros fueron

* [react-toastify][]
* [react-icons][]
* [native-piece][]

### En la carpeta `mocks` encontran la data de los usuarios que pueden iniciar sesión en la pagina y tambien una pequeña data de `Pokemon` para hacer algunas pruebas con `Cypress`

### Descripción breve del proyecto

La logica de autenticacion se podria mejorar mucho mas si se implementa los middleware de `Nextjs` ya que con estos nos asegurarmos de que rediriga mucho antes de que carge el sitio web gracias a el `SSR`, tambien quiero aclara que quiero expandir mis conocimientos en pruebas unitarias ya que lo poco que se lo he aplicado con [Vitest][] y [Cypress][] es muy nuevo para mi, pero estoy disponible aprender ya que esos tipos de pruebas `e2e` nos agiliza mucho el trabajo y que se cumplas las condiciones. Tener en cuenta que para poder usar `Cypress` tienes que configurar el archivo `tsconfig.json` con esta propiedad `"moduleResolution": "Node"`

#### Esto fue lo que alcance hacer en dos dias, muchas Gracias por su tiempo att: Dominyel Rivera

[cypress]: https://www.cypress.io/
[vitest]: https://vitest.dev/
[emotion]: https://emotion.sh
[nextjs13]: https://nextjs.org/
[link-local]: http://localhost:3000
[native-piece]: https://native-piece
[typescript]: https://www.typescriptlang.org/
[styled-components]: https://styled-components.com/
[react-icons]: https://react-icons.github.io/react-icons
[palettes]: https://palettes.shecodes.io/palettes/1238#palette
[react-toastify]: https://fkhadra.github.io/react-toastify/introduction
