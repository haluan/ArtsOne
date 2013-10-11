$(document).ready(function(){
$("#lihat-info").click(function(){
	$("#info-lengkap-seniman").toggle("slow");
	$("#thumb-sub").toggle("slow");
	if($("#lihat-info").attr('value')=="galeri"){
		$("#lihat-info").attr("value","info");
		$("#lihat-info").text("Info Selengkapnya »");	
	}else{
		$("#lihat-info").attr("value", "galeri");
		$("#lihat-info").text("Galeri «");
	}
});
$("#act1").click(function(){
	$("#thumb-utama").toggle("slow");
	$("#info-lengkap-gambar").toggle("slow");
	$("#info-dalam-gambar h1").text("Francis I of France");
	$("#info-dalam-gambar img").attr("src", "img/da vinci.jpg");
});
$("#kembali-utama").click(function(){
	$("#thumb-utama").toggle("slow");
	$("#info-lengkap-gambar").toggle("slow");
	$("#info-dalam-gambar h1").text("");
	$("#info-dalam-gambar img").attr("");
});
$("#rumah").click(function(){
	$("#main-menu").fadeIn("slow");
	$("#sub-bab").hide();
});
$("#sub-bab").hide();
$("#info-lengkap-seniman").toggle();
$("#info-lengkap-gambar").toggle();
});
