# 🎲 Dashboard de Dados

Una aplicación React moderna para lanzar dados virtuales con listas personalizadas de strings. Cada botón representa un dado diferente con un número variable de lados basado en la lista asociada de strings.

## 🚀 Características

- **Dashboard interactivo** con múltiples botones de dados
- **Listas personalizadas** - cada botón tiene su propia lista de strings
- **Dados dinámicos** - al hacer clic se lanza un dado de n caras (donde n = número de elementos en la lista)
- **Resultados prominentes** - los resultados se muestran de forma clara y atractiva
- **Historial de lanzamientos** - mantiene un registro de los últimos resultados
- **Interfaz moderna** - diseño limpio y responsivo
- **Animaciones suaves** - efectos visuales durante el lanzamiento

## 🎯 Dados Disponibles

- **Emociones** (D10) - Alegría, Tristeza, Ira, Miedo, etc.
- **Animales** (D12) - León, Elefante, Delfín, Águila, etc.
- **Colores** (D12) - Rojo, Azul, Verde, Amarillo, etc.
- **Acciones** (D16) - Correr, Saltar, Volar, Nadar, etc.
- **Lugares** (D12) - Montaña, Playa, Bosque, Desierto, etc.
- **Clima** (D9) - Soleado, Lluvioso, Nublado, etc.

## 🛠️ Tecnologías

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos con gradientes y animaciones
- **JavaScript ES6+** - Sintaxis moderna

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Vista previa de la construcción**:
   ```bash
   npm run preview
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── DiceDashboard.jsx    # Componente principal del dashboard
│   ├── DiceButton.jsx       # Componente de botón de dado individual
│   ├── ResultDisplay.jsx    # Componente para mostrar resultados
│   └── *.css               # Estilos para cada componente
├── App.jsx                 # Componente raíz de la aplicación
├── main.jsx               # Punto de entrada de React
└── index.css              # Estilos globales
```

## 🎮 Cómo Usar

1. **Selecciona un dado** - Haz clic en cualquier botón del dashboard
2. **Observa la animación** - El dado se animará durante el lanzamiento
3. **Ve el resultado** - El resultado aparecerá prominentemente en la parte superior
4. **Revisa el historial** - Los últimos lanzamientos se muestran en la parte inferior

## 🔧 Personalización

Para agregar nuevos dados o modificar las listas existentes, edita el array `diceData` en `src/components/DiceDashboard.jsx`:

```javascript
const diceData = [
  {
    id: 'mi_dado',
    name: 'Mi Dado Personalizado',
    icon: '🎮',
    items: ['Opción 1', 'Opción 2', 'Opción 3']
  }
  // ... más dados
]
```

## 📱 Diseño Responsivo

La aplicación está completamente optimizada para:
- 💻 Desktop
- 📱 Tablets
- 📲 Móviles

---

Desarrollado con ❤️ usando React y Vite
