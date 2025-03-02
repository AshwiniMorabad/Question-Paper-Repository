document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu > li');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            var submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }

            // Hide any other open submenus that are not ancestors
            var openSubmenus = document.querySelectorAll('.submenu');
            openSubmenus.forEach(function(openSubmenu) {
                if (openSubmenu !== submenu && !item.contains(openSubmenu)) {
                    openSubmenu.style.display = 'none';
                }
            });
        });

        // Prevent closing parent submenus when clicking on a child submenu item
        var subItems = item.querySelectorAll('.submenu li');
        subItems.forEach(function(subItem) {
            subItem.addEventListener('click', function(event) {
                event.stopPropagation();
                var subSubmenu = subItem.querySelector('.submenu');
                if (subSubmenu) {
                    subSubmenu.style.display = subSubmenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    });

    // Close the menu if clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu')) {
            var openSubmenus = document.querySelectorAll('.submenu');
            openSubmenus.forEach(function(openSubmenu) {
                openSubmenu.style.display = 'none';
            });
        }
    });
});