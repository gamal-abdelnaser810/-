function toggleCard(card) {
    const content = card.querySelectorAll('.card-content');
    const isExpanded = card.classList.contains('expanded');

    if (isExpanded) {
        card.classList.remove('expanded');
        content[0].classList.add('hidden');
    } else {
        card.classList.add('expanded');
        content[0].classList.remove('hidden');
    }
}
