function toggleNavbar() {
    if (document.getElementById('smallNavLinks').classList == 'smallNavLinksShow') {
        document.getElementById('smallNavLinks').classList = 'smallNavLinksHide';
    } else {
        document.getElementById('smallNavLinks').classList = 'smallNavLinksShow';
    }
}