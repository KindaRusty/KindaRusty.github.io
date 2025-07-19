document.addEventListener('DOMContentLoaded', () => {
    // Filter toggle functionality
    document.querySelectorAll('.filter-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !expanded);
            const options = button.nextElementSibling;
            options.style.display = expanded ? 'none' : 'block';
        });
    });

    // Sidebar functionality
    const filterButton = document.querySelector('.filter-button');
    const sidebar = document.querySelector('.sidebar');
    const sidebarCloseButton = document.querySelector('.sidebar-close-button');

    filterButton.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    sidebarCloseButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Events sorting and filtering functionality
    const eventsList = document.querySelector('.events-list');
    // Save original HTML
    const originalEventsHTML = eventsList.innerHTML;

    document.getElementById('sortSelect').addEventListener('change', function() {
        const value = this.value;

        // Always restore original HTML before sorting
        eventsList.innerHTML = originalEventsHTML;

        // Get date groups after restoration
        let dateGroups = Array.from(eventsList.querySelectorAll('.events-date'));
        let eventBlocks = [];

        // Group events by date
        dateGroups.forEach(dateGroup => {
            let group = [dateGroup];
            let next = dateGroup.nextElementSibling;
            while (next && !next.classList.contains('events-date')) {
                group.push(next);
                next = next.nextElementSibling;
            }
            eventBlocks.push(group);
        });

        if (value === 'date') {
            // Sort by date ascending
            eventBlocks.sort((a, b) => {
                let dateA = new Date(a[0].textContent.replace(/,/g,''));
                let dateB = new Date(b[0].textContent.replace(/,/g,''));
                return dateA - dateB;
            });
            // Clear all and add back by date groups
            eventsList.innerHTML = '';
            eventBlocks.forEach(group => {
                group.forEach(node => eventsList.appendChild(node));
            });
        } else {
            // Collect all event-items to sort by name
            let allEvents = [];
            eventBlocks.forEach(group => {
                for (let i = 1; i < group.length; i++) {
                    allEvents.push(group[i]);
                }
            });
            // Sort by event-title
            allEvents.sort((a, b) => {
                let titleA = a.querySelector('.event-title').textContent.trim().toLowerCase();
                let titleB = b.querySelector('.event-title').textContent.trim().toLowerCase();
                if (value === 'a-z') return titleA.localeCompare(titleB);
                else return titleB.localeCompare(titleA);
            });
            // Clear all and add back in new order, without date grouping
            eventsList.innerHTML = '';
            allEvents.forEach(ev => eventsList.appendChild(ev));
        }
    });

    function updateEventCount() {
        // Count event-items currently displayed (not hidden)
        const count = Array.from(document.querySelectorAll('.events-list .event-item'))
            .filter(ev => ev.style.display !== 'none').length;
        document.getElementById('eventCount').textContent = `${count} events`;
    }

    // Function filterEvents (filter by audience)
    function filterEvents() {
        // Get selected audiences
        const checkedAudience = Array.from(document.querySelectorAll('.filter-checkbox[data-filter="audience"]:checked'))
            .map(cb => cb.value);

        // Get selected prices
        const checkedPrice = Array.from(document.querySelectorAll('.filter-checkbox[data-filter="price"]:checked'))
            .map(cb => cb.value);

        document.querySelectorAll('.events-list .event-item').forEach(ev => {
            const audience = ev.querySelector('.event-audience')?.value || '';
            const price = ev.querySelector('.event-price')?.value || '';

            // Check audience
            const matchAudience = checkedAudience.length === 0 || checkedAudience.some(val => audience.includes(val));
            // Check price
            const matchPrice = checkedPrice.length === 0 || checkedPrice.includes(price);

            if (matchAudience && matchPrice) {
                ev.style.display = '';
            } else {
                ev.style.display = 'none';
            }
        });

        // Hide events-date if no event-items are visible below it
        document.querySelectorAll('.events-list .events-date').forEach(dateDiv => {
            let next = dateDiv.nextElementSibling;
            let hasVisible = false;
            while (next && !next.classList.contains('events-date')) {
                if (next.classList.contains('event-item') && next.style.display !== 'none') {
                    hasVisible = true;
                    break;
                }
                next = next.nextElementSibling;
            }
            dateDiv.style.display = hasVisible ? '' : 'none';
        });
    }

    // Initialize event count
    updateEventCount();

    // Call again when sorting
    document.getElementById('sortSelect').addEventListener('change', updateEventCount);

    // Call again when filtering (if audience filter exists)
    document.querySelectorAll('.filter-checkbox').forEach(cb => {
        cb.addEventListener('change', function() {
            filterEvents();
            updateEventCount();
        });
    });
});