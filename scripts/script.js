document.addEventListener('DOMContentLoaded', function () {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(function (profile) {
        profile.addEventListener('click', function () {
            const popup = document.getElementById('popup1');
            popup.style.display = 'block';
        });
    });

    
    const closePopupElement = document.getElementById('closePopup');
    closePopupElement.addEventListener('click', function () {
        const popup = document.getElementById('popup1');
        popup.style.display = 'none';
    });
});
