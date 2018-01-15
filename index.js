$(document).ready(function() {
    var body = $('body');
    var h3 = $('<h3>Accusation</h3>');
    var friend = ['Nick', 'Tyler', 'Katie', 'Jasmine', 'Luke'];
    var location = ['ballroom', 'billiard Room', 'cellar', 'conservatory', 'dining room', 'kitchen', 'hall', 'library', 'lounge', 'study']; 
    var weapon = ['candlestick', 'knife', 'lead pipe', 'revolver', 'rope', 'wrench', 'axe', 'bat', 'dumbbell', 'horseshoe', 'trophy', 'laptop', 'pencil', 'car', 'apple', 'banana', 'baby', 'chicken', 'horse', 'turtle'];
    
    
    for(var i = 1; i < 101; i++) {
        h3 = $(`<h3>Accusation ${i}</h3>`);
        h3.appendTo(body);
        let alertFunction = rando(i);
        h3.click(alertFunction);
        function rando(num) {
            return function() {
                var randomFriend = num % friend.length;
                var randomLocation = num % location.length;
                var randomWeapon = num % weapon.length;
                alert('I accuse ' + friend[randomFriend] + ', with the ' + weapon[randomWeapon] + ' in the ' + location[randomLocation] + '!');
            }
        }
    }
})