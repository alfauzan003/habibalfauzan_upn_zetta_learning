# Angular Day 4

# Report

Dalam angular, setiap komponen memiliki 8 fase lifecycle, yang dimulai ketika nagular menginsisiasi komponen class dan merender komponen. Lifecycle berlanjut dengan melakukan pengecekan terhadap perubahan dan mengupdate tampilan dan komponen yang dibutuhkan. Lifecycle berhenti ketika Angular menghancurkan komponen dan menghapus dari DOM.
Lifecycle dapat digunakan saat membuat DOM

# QUIZ

1. ada dua kasus:
   a. Initialisasi directive atau komponen setelah angular pertamakali menampilkan properti data
   b. Mengatur directive atau properti input komponen
2. dipanggil saat:
   a. dipanggil setelah ngOnChanges (jika terdapat onChanges)
   b. dipanggil walaupun tidak ada onChanges
3. ngAfterViewInit dipanggil pada saat setelah ngAfterContentChecked
4. ngOnChanges dipanggil pada saat sebelum ngOnInit (jika terdapat perubahan pada input)
5. Urutan hooks lifecycle :
   1. ngOnChanges
   2. ngOnInit
   3. ngDoCheck
   4. ngAFterContentInit
   5. ngAfterContentChecked
   6. ngAfterViewInit
   7. ngAfterViewChecked