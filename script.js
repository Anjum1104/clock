function updateClock() {
    // Get current time in India Standard Time
    // Using 'en-US' locale with 'Asia/Kolkata' timezone to get correct string components
    // But for analog calculations, we can construct a Date object that represents the current instant.
    // The visual rotation is based on the local time components needed for IST.

    // Create date object for now
    const now = new Date();

    // To get IST time components explicitly:
    const options = { timeZone: 'Asia/Kolkata', hour12: false, weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', fractionalSecondDigits: 3 };

    // We can use Intl.DateTimeFormat to extract parts
    const fmt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

    const parts = fmt.formatToParts(now);
    const getPart = (type) => parseInt(parts.find(p => p.type === type).value, 10);

    const hours = getPart('hour');
    const minutes = getPart('minute');
    const seconds = getPart('second');

    // For smooth second hand, we need milliseconds. 
    // Since Date() is created based on system time (which might not be IST, but the *instant* is global),
    // and milliseconds past the second are the same globally (mostly).
    const ms = now.getMilliseconds();

    // -- Analog Clock Logic --

    // Seconds: 6 degrees per second. Add milliseconds for smoothness.
    // 360 degrees / 60 seconds = 6 deg/s
    const secondDeg = (seconds + ms / 1000) * 6;

    // Minutes: 6 degrees per minute. Add seconds contribution.
    // 360 degrees / 60 minutes = 6 deg/min
    // (seconds / 60) * 6 adds the fraction
    const minuteDeg = (minutes + seconds / 60) * 6;

    // Hours: 30 degrees per hour. Add minutes contribution.
    // 360 degrees / 12 hours = 30 deg/hr
    const hourDeg = ((hours % 12) + minutes / 60) * 30;

    document.getElementById('secondHand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById('hourHand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

    // -- Digital Clock Logic --
    // We want 12-hour format with AM/PM for digital display
    let displayHour = hours % 12;
    displayHour = displayHour ? displayHour : 12; // the hour '0' should be '12'
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const pad = (n) => n < 10 ? '0' + n : n;
    const timeString = `${pad(displayHour)}:${pad(minutes)}:${pad(seconds)} <span style="font-size: 0.5em; vertical-align: top;">${ampm}</span>`;

    document.getElementById('digitalTime').innerHTML = timeString;

    // -- Date Logic --
    const dateFmt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    document.getElementById('dateDisplay').textContent = dateFmt.format(now);

    // Setup next frame
    requestAnimationFrame(updateClock);
}

// Start the clock
requestAnimationFrame(updateClock);