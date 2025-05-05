# AD Weather Forecast

A modern, responsive weather dashboard providing real-time weather and air quality data for any city or your current location. Built with React, it features intuitive search, detailed weather metrics, and air quality indices, all powered by the WeatherAPI.

---

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)
9. [Environment Variables](#environment-variables)
10. [Tests](#tests)
11. [Known Issues / TODOs](#known-issues--todos)
12. [Changelog](#changelog)
13. [Screenshots / Demos](#screenshots--demos)

---

## Description

**AD Weather Forecast** is a web application that allows users to:

- Instantly view current weather and air quality for their location or any city worldwide.
- See detailed metrics including temperature, humidity, wind, UV index, and pollutant levels.
- Enjoy a clean, user-friendly interface optimized for both desktop and mobile.

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ad-weather.git
   cd ad-weather
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

- **Search for a city:**  
  Enter a city name in the search bar and click the search icon to view weather data.
- **Use your location:**  
  On first load, the app requests your location to show local weather.
- **View metrics:**  
  The dashboard displays temperature, feels-like, condition, air quality indices (CO, NO₂, O₃, SO₂, PM2.5, PM10, US-EPA, DEFRA), wind, humidity, UV, and more.

**Example:**

```js
// To run tests
npm test
```

---

## Features

- 🌍 **Location-based weather** (auto-detects user location)
- 🔍 **City search** for global weather data
- 🌡️ **Detailed weather metrics** (temperature, humidity, wind, UV, etc.)
- 🏭 **Air quality indices** (CO, NO₂, O₃, SO₂, PM2.5, PM10, US-EPA, DEFRA)
- 📱 **Responsive design** for all devices
- ⚡ **Real-time updates** on search or location change

---

## Technologies Used

- **React** (18+)
- **Create React App**
- **WeatherAPI** (for weather and air quality data)
- **Jest** & **React Testing Library** (for testing)

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style and includes relevant tests.

---

## License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions, suggestions, or support, please open an issue or contact [contact@ayushdhar.com].

---

## Environment Variables

- **API Key:**  
  The app currently uses a demo WeatherAPI key hardcoded in `src/api/index.js`.  
  For production, replace it with your own key and consider using a `.env` file:
  ```
  REACT_APP_WEATHER_API_KEY=your_api_key_here
  ```
  Update the API call in `src/api/index.js` to use `process.env.REACT_APP_WEATHER_API_KEY`.

---

## Tests

To run tests:

```bash
npm test
```

Uses Jest and React Testing Library.

---

## Known Issues / TODOs

- [ ] Move API key to environment variable for security.
- [ ] Add error handling for failed API requests.
- [ ] Improve accessibility and add dark mode.
- [ ] Add forecast (multi-day) view.

---

## Changelog

- **v0.1.0** – Initial release: real-time weather, air quality, and location-based search.

---
