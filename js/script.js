$('#results').html(``);

// Function to check if string contains vowels
function containsVowels(str) {
    str = str.toLowerCase();
    const vowels = "aeiou";
    const myIterator = Iterator.from(str);
    const result = myIterator.some((ch) => vowels.includes(ch));
    return result;
}

// Keyup event for text field
$('#mytext').on('keyup', () => {
    $('#results').html(``);
    const str = $('#mytext').val();
    if (!str) {
        $('#results').html(``);
    } else {
        $('#results').append(`You have entered ${str} <br>`);
        $('#results').append(`Contains vowels? ${containsVowels(str) ? "Yes" : "No"} <br>`);
    }

});

// Click event for Clear Button
$('#clearBtn').on('click', () => {
    $('#results').html(``);
});