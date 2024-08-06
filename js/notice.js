
    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.btn_click');

        buttons.forEach(button => {
            button.addEventListener('click', function (event) {
                
                event.preventDefault();

                
                buttons.forEach(btn => btn.classList.remove('active'));
                
                this.classList.add('active');
            });

            
            button.querySelector('a').addEventListener('click', function(e) {
                e.preventDefault();
            });
        });
    });
