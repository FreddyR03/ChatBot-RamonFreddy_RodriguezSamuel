# 🤖 Chatbot API experto en resolver dudas sobre el desarrollo móvil
Este proyecto es una API REST basada en FastAPI que funciona como un chatbot experto en resolver dudas sobre el desarrollo móvil. Utiliza el modelo Mistral a través de OpenRouter (compatible con la API de OpenAI) para generar respuestas conversacionales.

## 🚀 Requisitos
- Python 3.8 o superior
- Tener una API Key de OpenRouter
- Conexión a internet



## 📁 Estructura del proyecto
```
chatbot/
├── .vscode/
│ └── tasks.json  # Tarea para ejecutar FastAPI en VS Code
├── venv/ # Entorno virtual (no subir a git)
│ ├── bin/ 
│ ├── Python3 (Linux) o Script para windows
│ └── ...
├── pycache/ # Archivos compilados (ignorar)
├── chatbot.py # API principal con FastAPI (uvicorn chatbot:app)
├── config.py # Configuración y constantes
├── index.html # Interfaz del chatbot (frontend)
├── style.css # Estilos del frontend
├── script.js # Lógica del frontend (fetch a la API)
├── imagen.jpg / imagen.png # Recursos gráficos
├── .env # Variables de entorno (API keys, etc.)
├── .env.example # Ejemplo de variables de entorno
├── requirements.txt # Dependencias de Python
├── README.md # Documentación del proyecto
└── version.txt # Versión del proyecto 
```

