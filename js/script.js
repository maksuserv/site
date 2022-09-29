document.querySelector("#download-btn").onclick = function(){
  let email = prompt("Напишите нам ваш Email, чтобы подписаться на рассылку о начале предпродаж");
	if (email.indexOf('@') != -1)
	{
		alert("Мы пошлем вам письмо о начале предзаказов!");
	} else
	{
		alert("Пожалуйста, введите правильный email!");
	}
}