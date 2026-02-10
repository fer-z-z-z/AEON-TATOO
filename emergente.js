
$(document).ready(function() {
    // Cuando se hace clic en una imagen del portfolio
    $('.emergente-btn').on('click', function(e) {
        e.preventDefault();
        
        var imageUrl = $(this).attr('href');
        var descId = $(this).data('title');
        var descriptionContent = $('#' + descId).html();
        
        // Crear o actualizar el lightbox personalizado
        showCustomLightbox(imageUrl, descriptionContent);
    });
    
    function showCustomLightbox(imageUrl, description) {
        // Crear overlay
        var overlay = $('<div class="custom-lightbox-overlay"></div>');
        var container = $('<div class="custom-lightbox-container"></div>');
        var image = $('<img src="' + imageUrl + '" class="custom-lightbox-image">');
        var closeBtn = $('<button class="custom-lightbox-close">&times;</button>');
        var descriptionBox = $('<div class="custom-lightbox-description"></div>');
        
        // Construir el lightbox
        descriptionBox.html(description);
        container.append(closeBtn);
        container.append(image);
        container.append(descriptionBox);
        overlay.append(container);
        
        // Agregar al body
        $('body').append(overlay);
        
        // Mostrar con animación
        setTimeout(function() {
            overlay.addClass('active');
        }, 10);
        
        // Evento para cerrar
        closeBtn.on('click', function() {
            closeLightbox();
        });
        
        overlay.on('click', function(e) {
            if (e.target === overlay[0]) {
                closeLightbox();
            }
        });
        
        // Cerrar con ESC
        $(document).on('keyup.lightbox', function(e) {
            if (e.keyCode === 27) {
                closeLightbox();
            }
        });
        
        function closeLightbox() {
            overlay.removeClass('active');
            setTimeout(function() {
                overlay.remove();
                $(document).off('keyup.lightbox');
            }, 300);
        }
    }
});

