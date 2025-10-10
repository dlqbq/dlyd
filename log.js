const originalConsole = { ...console };

function getTimestamp() {
    const date = new Date();
    // Convert to Beijing time (UTC+8)
    const beijingOffset = 8 * 60; // minutes
    const localOffset = date.getTimezoneOffset(); // minutes
    const beijingTime = new Date(date.getTime() + (beijingOffset + localOffset) * 60000);
    return `[${beijingTime.toISOString().replace('T', ' ').replace('Z', '')}] `;
}

Object.keys(originalConsole).forEach((method) => {
    if (typeof originalConsole[method] === 'function') {
        console[method] = function (...args) {
            const stack = new Error().stack.split('\n')[2] || '';
            const match = stack.match(/\((.*):(\d+):(\d+)\)/) || stack.match(/at (.*):(\d+):(\d+)/);
            let location = '';
            if (match) {
                const filePath = match[1].split(/[\\/]/).pop();
                location = `${filePath}:${match[2]}`;
            }
            // Try to get function/method name
            const funcMatch = stack.match(/at (.*?) \(/) || stack.match(/at (.*?) /);
            const funcName = funcMatch && funcMatch[1] !== 'Object.<anonymous>' ? funcMatch[1] : '';
            const info = [getTimestamp(), method.toUpperCase(), location, funcName].filter(Boolean).join(' ');
            originalConsole[method].call(console, info, ...args);
        };
    }
});