$(document).ready(function(){
$("#radensaleh").click(function(){
	$("#main-menu").fadeOut("slow");
	$("#sub-bab").fadeIn("slow");
	$("#nama-seniman").text("Raden Saleh");
	$("#keterangan-seniman").text("Raden Saleh Sjarif Boestaman (Semarang, 1807 atau 1811- Buitenzorg (sekarang Bogor), 23 April 1880) adalah salah seorang pelukis terkenal dari Hindia Belanda (sekarang Indonesia).");
	$("#sub-thumb-1").attr("src","img/Raden_Saleh_-_Diponegoro_arrest 600.jpg");
	$("#sub-thumb-2").attr("src","img/A_Flood_on_Java_1865-1876_Raden_Saleh 600.jpg");
	$("#sub-thumb-3").attr("src","img/Raden Saleh Fighting with a Lion 600.jpg");
	$("#thumb1").text("Penangkapan Pangeran DIponegoro");
	$("#isi-thumb-1").text("Lukisan yang berjudul asli Gefangennahme Diepo Negoros atau Penangkapan Diponegoro "+ 
"ini dibuat oleh Raden Saleh pada tahun 1857, dua tahun setelah wafatnya sang pahlawan "+
"di Benteng Rotterdam, Makassar, 8 Januari 1855. Lukisan itu bercerita tentang tentara "+
"Belanda yang menjemput seseorang berjubah putih dan besorban hijau. Penduduk yang menyaksikan "+
"kejadian tersebut tampak bersedih, mereka bersimpuh di tanah berusaha menahan sang tokoh agar "+
"tidak dibawa penjajah. Lukisan yang dilukis oleh Raden Saleh adalah Pangeran Diponegoro, "+
"pahlawan nasional kelahiran Jogjakarta yang ditangkap Jenderal De Kock di Magelang, 28 Maret 1830.");
	$("#thumb2").text("A Flood on Java");
	$("#isi-thumb-2").text("Bercerita tentang banjir yang melanda di Pulau Jawa. Lukisan ini dibuat pada tahun 1865-1876.");
	$("#thumb3").text("Perkelahian dengan Singa");
	$("#isi-thumb-3").text("Pada lukisan karya Raden Saleh yang berjudul “Perkelahian dengan Singa” itu menggambarkan perkelahian antara seorang laki-laki "+ 
"aljazair yang mengendarai kuda menghadapi singa di padangpasir. Tampak disana otot-otot singa dan ketakutan kuda tergambar dengan "+
"menarik. Seorang pembantunya nampak mati tersungkur. Terkaman yang kuat menyebabkan pengendara kuda jatuh dan terasa pula suasana "+
"yang dramatis dan emosional padapertarungan antaramanusia dan singa dalam lukisan tersebut. Pada pewarnaannya menggunakan warna "+
"yang gelap kelam, langit kemerahan dan tandusnya gurun, menyebabkan lukisan tersebut gagah dan elok untuk dilihat. "+
"Dan keharmonisan warna background dengan objek sangat menyatu.");
	$("#info-dalam h1").text("Raden Saleh");
	$("#info-dalam img").attr("src", "img/Raden_Saleh.jpg");
	$("#info-dalam p").text("Tokoh romantisme Delacroix dinilai "+ 
	"memengaruhi karya-karya Raden Saleh yang jelas menampilkan keyakinan romantismenya."+ 
	"Saat romantisme berkembang di Eropa di awal abad 19, Raden Saleh tinggal dan berkarya di Perancis (1844 - 1851)."+
"Ciri romantisme muncul dalam lukisan-lukisan Raden Saleh yang mengandung paradoks. "+
"Gambaran keagungan sekaligus kekejaman, cerminan harapan (religiusitas) sekaligus ketidakpastian takdir (dalam realitas)."+
 "Ekspresi yang dirintis pelukis Perancis Gerricault (1791-1824) dan Delacroix ini diungkapkan dalam suasana dramatis yang mencekam, lukisan"+ 
 "kecoklatan yang membuang warna abu-abu, dan ketegangan kritis antara hidup dan mati."+
"Lukisan-lukisannya yang dengan jelas menampilkan ekspresi ini adalah bukti Raden Saleh seorang romantisis."+ 
"Konon, melalui karyanya ia menyindir nafsu manusia yang terus mengusik makhluk lain. Misalnya dengan berburu singa, rusa, banteng, dll."+ 
"Raden Saleh terkesan tak hanya menyerap pendidikan Barat tetapi juga mencernanya untuk menyikapi realitas di hadapannya. Kesan kuat lainnya"+ 
"adalah Raden Saleh percaya pada idealisme kebebasan dan kemerdekaan, maka ia menentang penindasan."+
"Wajar bila muncul pendapat, meski menjadi pelukis kerajaan Belanda, ia tak sungkan mengkritik politik represif pemerintah"+ 
"Hindia Belanda. Ini diwujudkannya dalam lukisan Penangkapan Pangeran Diponegoro.");
});

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
$("#rumah").click(function(){
	$("#main-menu").fadeIn("slow");
	$("#sub-bab").hide();
});
$("#sub-bab").hide();
$("#info-lengkap-seniman").toggle();
});
