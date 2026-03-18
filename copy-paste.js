(function() {
    const existing = document.getElementById('lockdown-wrapper');
    if (existing) {
        document.documentElement.style.marginTop = '0px';
        existing.remove();
    }

    const wrapper = document.createElement('div');
    wrapper.id = 'lockdown-wrapper';
    
    const bar = document.createElement('div');
    bar.innerHTML = 'BROWSER LOCKDOWN';
    
    Object.assign(bar.style, {
        backgroundColor: '#990000',
        color: 'white',
        textAlign: 'center',
        padding: '7.87px 0',
        fontFamily: 'sans-serif',
        fontWeight: '900',
        fontSize: '14.4px',
        letterSpacing: '1.5px',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '2147483647',
        textShadow: '1px 1px 0px rgba(0,0,0,0.4)',
        lineHeight: '1',
        boxSizing: 'border-box'
    });
    
    wrapper.appendChild(bar);
    document.body.appendChild(wrapper);

    const barHeight = bar.offsetHeight;
    document.documentElement.style.marginTop = barHeight + 'px';
})();
