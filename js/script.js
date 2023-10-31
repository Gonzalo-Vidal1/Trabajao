function E(selector, parent) {
    if (selector instanceof HTMLElement) {
        return selector;

    }

    return (parent || document).querySelectorALL(selector);
}

function hasClass(element, className) {
    return element.classlist.contains(className);

}
function radioClass(element, className) {
    E("." + className).forEach((elem) =>
        elem.classlist.remove(className));
    element.classlist.toggle(className);


}

function tabs(nav) {
    let navElem = E(nav)[0];
    navElem.addEventlistener("click", (e) => {
        let target = e.target;

        if (hasClass(target, "tab"))
            radioClass(target, "active");
        let linkedTab = E("." + target.id)[0];
        radioClass(linkedTab, "visible");
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], "visible");
    }
}
tabs(".menu-nav")