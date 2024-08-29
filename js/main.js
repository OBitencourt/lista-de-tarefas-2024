

const Main = {

    tasks: [],

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
        this.buildTasks()
    },

    cacheSelectors: function() {
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    bindEvents: function () {
        
        const self = this
        
        this.$checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButton_click
            
        }) 

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button) {
            button.onclick = self.Events.removeButton_click
        })
    },

    

    buildTasks: function() {
        let html = ''

        this.tasks.forEach(function(item) {
            html += `
                <li>
                    <div class="check"></div>
                    <label for="" class="task">
                        ${item.task}
                    </label>
                    <button class="remove"></button>
                </li>
            `
        })
    },
    
    // item é a chave, task são os valores


    Events: {
        checkButton_click: function(e) {
            const li = e.target.parentElement
            li.classList.toggle('done')
            
            /*
                Outras formas

            if (!li.classList.contains('done')) {
                li.classList.add('done')
            } else {
                li.classList.remove('done')
            }

            ///////////////

            const isDone = li.classList.contains('done')
            if(!isDone) {
                return li.classList.add('done)
            }

            li.classList.remove('done')
            */
        },

        inputTask_keypress: function(e) {
          

            const key = e.key
            const value = e.target.value
            if (key === 'Enter') {
                this.$list.innerHTML += `
                    <li>
                        <div class="check"></div>
                        <label for="" class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `
                e.target.value = ''

                this.cacheSelectors()
                this.bindEvents()

                
            }

            

            // console.log(e.key) // a tecla especifica que o usuário clicou (para capturar o enter)
            // console.log(e.target.value) // valor digitado pelo usuário


        },

        removeButton_click: function(e) {
            const li = e.target.parentElement
            li.classList.add('removed')
            
            setTimeout(function(e){
                li.classList.add('hidden')
            }, 300)
        }
    }

}

Main.init()