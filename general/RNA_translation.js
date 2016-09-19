// CREDIT: http://www.codewars.com/kata/rna-to-protein-sequence-translation/train/javascript 
    
//DIRECTIONS:
    // Given a string of RNA, create a funciton which translates the RNA into its protein sequence. 


//AMINO ACID DICTIONARY
const dictionary = {
  // Phenylalanine
    'UUC':'F', 'UUU':'F',
    // Leucine
    'UUA':'L', 'UUG':'L', 'CUU':'L', 'CUC':'L','CUA':'L','CUG':'L', 
    // Isoleucine
    'AUU':'I', 'AUC':'I', 'AUA':'I', 
    // Methionine
    'AUG':'M', 
    // Valine
    'GUU':'V', 'GUC':'V', 'GUA':'V', 'GUG':'V', 
    // Serine
    'UCU':'S', 'UCC':'S', 'UCA':'S', 'UCG':'S', 'AGU':'S', 'AGC':'S', 
    // Proline
    'CCU':'P', 'CCC':'P', 'CCA':'P', 'CCG':'P', 
    // Threonine
    'ACU':'T', 'ACC':'T', 'ACA':'T', 'ACG':'T',
    // Alanine
    'GCU':'A', 'GCC':'A', 'GCA':'A', 'GCG':'A', 
    // Tyrosine
    'UAU':'Y', 'UAC':'Y', 
    // Histidine
    'CAU':'H', 'CAC':'H',
    // Glutamine
    'CAA':'Q', 'CAG':'Q', 
    // Asparagine
    'AAU':'N', 'AAC':'N', 
    // Lysine
    'AAA':'K', 'AAG':'K',
    // Aspartic Acid
    'GAU':'D', 'GAC':'D', 
    // Glutamic Acid
    'GAA':'E', 'GAG':'E',
    // Cystine
    'UGU':'C', 'UGC':'C',
    // Tryptophan
    'UGG':'W', 
    // Arginine
    'CGU':'R', 'CGC':'R', 'CGA':'R', 'CGG':'R', 'AGA':'R', 'AGG':'R', 
    // Glycine
    'GGU':'G',  'GGC':'G', 'GGA':'G', 'GGG':'G', 
    // Stop codon
    'UAA':'Stop', 'UGA':'Stop', 'UAG':'Stop'}

//SOLUTION #1
function protein1(RNA){
 let protein_sequence = ""
 let nucleic_acid = ""
  for(var i = 0; i<RNA.length+1; i++){
    nucleic_acid += RNA[i];
    if(nucleic_acid.length === 3){
      if(dictionary[nucleic_acid] == 'Stop'){
        nucleic_acid =""
      } else{
        protein_sequence+= dictionary[nucleic_acid];
        nucleic_acid = ""
      }
    }
  }
  return protein_sequence
}

//SOLUTION #2
function protein2(RNA){
  return RNA.replace(/.{3}/g, (acid) => dictionary[acid] !="Stop" ? dictionary[acid] : "")
}