document.getElementById('discover-sec').addEventListener('click', function(){
    window.location.href = 'blogs.html';
});

// Complete Button Event
let allCompleteBtn = document.getElementsByClassName('complete-btn');

for( let element of allCompleteBtn ){
    element.addEventListener('click', function(){
        let taskAssigned = textToNumber('task-assigned');
        let completedTask = textToNumber('Completed-task');
        
        element.disabled = true;
        element.style.background = 'rgba(55, 82, 253, 0.2)';
        element.style.cursor = 'default';

        updatedAlert();
        taskAssigned-=1;
        completedTask+=1;
        document.getElementById('task-assigned').innerText = taskAssigned;    
        document.getElementById('Completed-task').innerText = completedTask;
        
        const taskTitle = element.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const container = document.getElementById('history-container');
                const div = document.createElement('div');
                div.innerHTML = `
                    <p class="bg-blue-50 border-2 border-blue-600 border-dotted p-4 text-gray-500 rounded-md mb-3">You have Complete The Task <span class = "text-blue-600 font-medium">${taskTitle}</span> at <span class = "text-black font-medium">${time}</span></p>
                `
        container.appendChild(div);

        if (taskAssigned === 0) {
            alert('Congratulation!!! You have completed all the current task');
        }
        
    });
    
}


// Clear History
document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('history-container').innerHTML = '';
});


