function generateUrl() {  
    const baseUrl = document.getElementById('input-url').value;  
    const param = document.getElementById('input-param').value;  
    
    if (baseUrl && param) {  
        const outputUrl = `${baseUrl}?${param}`;  
        document.getElementById('output-url').innerText = `Generated URL: ${outputUrl}`;  
    } else {  
        document.getElementById('output-url').innerText = 'Please enter both a base URL and a parameter.';  
    }  
}  
