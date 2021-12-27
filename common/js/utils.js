function getCtrls() {
    const ctrls = {};
    const arr = document.querySelectorAll("[id]");
    arr.forEach(el => {
        ctrls[el.id] = el;
    });
    return ctrls;
}

export { getCtrls };