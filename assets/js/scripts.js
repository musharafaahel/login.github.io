
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    /*
        Login form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    /*
        Registration form validation
    */
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});


var users = [
    {
     username: "admin",
     password: "admin"  
    }
]

//-----------------------------------------------------------------------------//
function login() {
    
    var username = document.getElementById('username').value
    
    var password = document.getElementById('password').value

    
    for(var i = 0; i < users.length; i++) {
        
        if(username === users[i].username && password === users[i].password) {
            alert(username + ' is Successfully logged in!!!');  
            break;
        }  else if (username !== users[i].username || password !== users[i].password ){
               alert("wrong username or password or Checking [Click Ok] ");
        } else {
        
            alert("wrong credintials");
        }
    }
}

//-------------------------------------------------------------------------------//
function registerUser() {
    
    var registerUsername = document.getElementById('newUsername').value

    var registerPassword = document.getElementById('newPassword').value
    
    var newUser = {
        username: registerUsername,
        password: registerPassword
    }
    
    for(var i = 0; i < users.length; i++) {
        
        if(registerUsername === users[i].username) {
            
            alert('That username is already taken , please choose another');
            return
        
        } else if (registerPassword.length < 8) {
            
            alert('PASSWORD LENGTH MUST BE ATLEAST 8');
            alert('User Creation Failed due to password');

    
            return
        } else {
            alert('User Successfully Created');

        }
        
    }

    
    users.push(newUser)
    

}





