# Live Clock - Indian Standard Time (IST)

A beautiful, real-time clock application designed to display Indian Standard Time (IST) with elegance and precision. This project features dual clock faces—analog and digital—integrated into a modern, glassmorphic interface.

## Features

- **Dual Display System**:
  - **Analog Clock**: Classic three-hand interface (Hour, Minute, Smooth-sweeping Second) with dynamic rotation logic.
  - **Digital Clock**: 12-hour format with AM/PM indicators and a comprehensive date display.
- **Timezone Accurate**: Hardcoded to strictly follow 'Asia/Kolkata' (IST), ensuring accuracy regardless of the user's local system time zone.
- **Smooth Animations**: Utilizes JavaScript's `requestAnimationFrame` to maintain fluid movement of the clock hands, particularly the second hand which includes millisecond precision for a sweeping effect.
- **Modern UI/UX**:
  - **Glassmorphism**: Translucent, frosted-glass aesthetic using CSS backdrop-filters.
  - **Responsive Design**: Adapts to different screen sizes.
  - **Typography**: Uses the 'Outfit' font family from Google Fonts for a clean, contemporary look.

## Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Advanced styling variables, flexbox layout, and glassmorphism effects (`backdrop-filter`).
- **JavaScript (ES6+)**: Time calculation engines, DOM manipulation, and animation loops.

##  Getting Started

### Prerequisites

You need a modern web browser (Chrome, Firefox, Safari, Edge) to view this application.

### Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/live_clock.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd live_clock
   ```

3. **Run the application**:
   - Simply open `index.html` in your web browser.
   - For a better development experience, use a local static server (like Live Server in VS Code).

## Project Structure

```
live_clock/
├── index.html      # Main HTML structure
├── style.css       # Styling and glassmorphism effects
├── script.js       # Clock logic and time calculation
└── README.md       # Project documentation
```

##  Customizable Design

The visual style is heavily reliant on CSS variables defined in `style.css`. You can easily adjust colors, fonts, and sizes by modifying the `:root` variables or the `.clock-card` and `.digital-card` classes.

## License

This project is open-source and available for personal and educational use.
