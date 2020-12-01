export const AVAILABLE_CHORDS = {
    "C": ["CM", "C(b5)", "Cadd9", "Caddb9", "Cadd#9", "Cm", "Cmb5", "Cm#5", "Cm6", "Cm6(add9)", "Cm7", "Cm7#5", "CmM7", "Cm+7b9", "Cm+7#9", "CmM7(add9)", "Cm7b5", "Cm7b9", "Cm7#9", "Cmb9", "C7", "C7(6)", "C7b5", "Cdim7", "Cdim7(addM7)", "Cdim(b13)", "Caug", "C6", "C6(add9)", "CM7", "CM7#5", "CM7b5", "C9", "C9b5", "Cm9", "Cm7b5b9", "Cm9b5", "Cm(sus9)", "CM9", "CM9#11", "C7b9", "C7#9", "C7#9b13", "C7b5(add13)", "C7(add13)", "C7b5b9", "C7b5#9", "C7#5#9", "Caug7", "Caug7b9", "Caug7#9", "Caug9M7", "C+7b9#11", "Cm+7b9#11", "C11", "C11+", "Cm11", "CM11", "Cm7(add11)", "Cm9#11", "Cm7b9#11", "Cm7(add13)", "C11b9", "C9#5", "C9b6", "C9#11", "C7#9#11", "C7b9#11", "C7#11", "CM7#11", "Cm11b5", "Csus4", "Cmsus4", "Cm7sus4", "Csus(addb9)", "Csus(add9)", "Csus(add#9)", "C7sus", "C7susb9", "Csus2", "C7sus2", "Csus9", "C13sus", "C13susb9", "C13", "C7b13", "C13b5", "C13#9", "C13b9", "CM#11", "CM13", "Cm13", "C13#11", "CM13#11", "C5", "Comit3add9", "C7omit3", "Cm7omit5", "C11#5", "Caug9", "C9+", "C+9", "C+9M7", "C+M7", "Cm(add9)", "C(add9)", "C(addb9)", "C(add#9)", "C69", "Cm69", "Cm(b5)", "Cm7(b9)", "Cm7(#9)", "C9+5", "Cm+5", "Cm+", "CM6", "Cm7-5", "Cm7(omit5)", "C+", "C+7", "C+7#9", "C+7b9", "C7(omit3)", "C(#5)", "C7#5b9", "C7-9", "C7+9", "Cmaj7", "CM7-5", "CM7+5", "CM7(add13)", "C7alt", "C7sus4", "C13sus4", "C7+", "C7#5", "C7+5", "C7-5", "Csus", "Cmaj9", "Cmaj13", "Cm(maj7)", "Cm+7", "Cmin(maj7)", "Cmin#7", "Cm#7", "Cmsus", "Cm7sus", "Cdim", "C\u00b0", "C\u00b03", "C\u00b0(addM7)", "C\u00f8", "C9sus", "C9-5", "Cdim3", "Comit3(add9)", "C9sus4", "C7b9sus"], "C#": ["C#M", "C#(b5)", "C#add9", "C#addb9", "C#add#9", "C#m", "C#mb5", "C#m#5", "C#m6", "C#m6(add9)", "C#m7", "C#m7#5", "C#mM7", "C#m+7b9", "C#m+7#9", "C#mM7(add9)", "C#m7b5", "C#m7b9", "C#m7#9", "C#mb9", "C#7", "C#7(6)", "C#7b5", "C#dim7", "C#dim7(addM7)", "C#dim(b13)", "C#aug", "C#6", "C#6(add9)", "C#M7", "C#M7#5", "C#M7b5", "C#9", "C#9b5", "C#m9", "C#m7b5b9", "C#m9b5", "C#m(sus9)", "C#M9", "C#M9#11", "C#7b9", "C#7#9", "C#7#9b13", "C#7b5(add13)", "C#7(add13)", "C#7b5b9", "C#7b5#9", "C#7#5#9", "C#aug7", "C#aug7b9", "C#aug7#9", "C#aug9M7", "C#+7b9#11", "C#m+7b9#11", "C#11", "C#11+", "C#m11", "C#M11", "C#m7(add11)", "C#m9#11", "C#m7b9#11", "C#m7(add13)", "C#11b9", "C#9#5", "C#9b6", "C#9#11", "C#7#9#11", "C#7b9#11", "C#7#11", "C#M7#11", "C#m11b5", "C#sus4", "C#msus4", "C#m7sus4", "C#sus(addb9)", "C#sus(add9)", "C#sus(add#9)", "C#7sus", "C#7susb9", "C#sus2", "C#7sus2", "C#sus9", "C#13sus", "C#13susb9", "C#13", "C#7b13", "C#13b5", "C#13#9", "C#13b9", "C#M#11", "C#M13", "C#m13", "C#13#11", "C#M13#11", "C#5", "C#omit3add9", "C#7omit3", "C#m7omit5", "C#11#5", "C#aug9", "C#9+", "C#+9", "C#+9M7", "C#+M7", "C#m(add9)", "C#(add9)", "C#(addb9)", "C#(add#9)", "C#69", "C#m69", "C#m(b5)", "C#m7(b9)", "C#m7(#9)", "C#9+5", "C#m+5", "C#m+", "C#M6", "C#m7-5", "C#m7(omit5)", "C#+", "C#+7", "C#+7#9", "C#+7b9", "C#7(omit3)", "C#(#5)", "C#7#5b9", "C#7-9", "C#7+9", "C#maj7", "C#M7-5", "C#M7+5", "C#M7(add13)", "C#7alt", "C#7sus4", "C#13sus4", "C#7+", "C#7#5", "C#7+5", "C#7-5", "C#sus", "C#maj9", "C#maj13", "C#m(maj7)", "C#m+7", "C#min(maj7)", "C#min#7", "C#m#7", "C#msus", "C#m7sus", "C#dim", "C#\u00b0", "C#\u00b03", "C#\u00b0(addM7)", "C#\u00f8", "C#9sus", "C#9-5", "C#dim3", "C#omit3(add9)", "C#9sus4", "C#7b9sus"], "Db": ["DbM", "Db(b5)", "Dbadd9", "Dbaddb9", "Dbadd#9", "Dbm", "Dbmb5", "Dbm#5", "Dbm6", "Dbm6(add9)", "Dbm7", "Dbm7#5", "DbmM7", "Dbm+7b9", "Dbm+7#9", "DbmM7(add9)", "Dbm7b5", "Dbm7b9", "Dbm7#9", "Dbmb9", "Db7", "Db7(6)", "Db7b5", "Dbdim7", "Dbdim7(addM7)", "Dbdim(b13)", "Dbaug", "Db6", "Db6(add9)", "DbM7", "DbM7#5", "DbM7b5", "Db9", "Db9b5", "Dbm9", "Dbm7b5b9", "Dbm9b5", "Dbm(sus9)", "DbM9", "DbM9#11", "Db7b9", "Db7#9", "Db7#9b13", "Db7b5(add13)", "Db7(add13)", "Db7b5b9", "Db7b5#9", "Db7#5#9", "Dbaug7", "Dbaug7b9", "Dbaug7#9", "Dbaug9M7", "Db+7b9#11", "Dbm+7b9#11", "Db11", "Db11+", "Dbm11", "DbM11", "Dbm7(add11)", "Dbm9#11", "Dbm7b9#11", "Dbm7(add13)", "Db11b9", "Db9#5", "Db9b6", "Db9#11", "Db7#9#11", "Db7b9#11", "Db7#11", "DbM7#11", "Dbm11b5", "Dbsus4", "Dbmsus4", "Dbm7sus4", "Dbsus(addb9)", "Dbsus(add9)", "Dbsus(add#9)", "Db7sus", "Db7susb9", "Dbsus2", "Db7sus2", "Dbsus9", "Db13sus", "Db13susb9", "Db13", "Db7b13", "Db13b5", "Db13#9", "Db13b9", "DbM#11", "DbM13", "Dbm13", "Db13#11", "DbM13#11", "Db5", "Dbomit3add9", "Db7omit3", "Dbm7omit5", "Db11#5", "Dbaug9", "Db9+", "Db+9", "Db+9M7", "Db+M7", "Dbm(add9)", "Db(add9)", "Db(addb9)", "Db(add#9)", "Db69", "Dbm69", "Dbm(b5)", "Dbm7(b9)", "Dbm7(#9)", "Db9+5", "Dbm+5", "Dbm+", "DbM6", "Dbm7-5", "Dbm7(omit5)", "Db+", "Db+7", "Db+7#9", "Db+7b9", "Db7(omit3)", "Db(#5)", "Db7#5b9", "Db7-9", "Db7+9", "Dbmaj7", "DbM7-5", "DbM7+5", "DbM7(add13)", "Db7alt", "Db7sus4", "Db13sus4", "Db7+", "Db7#5", "Db7+5", "Db7-5", "Dbsus", "Dbmaj9", "Dbmaj13", "Dbm(maj7)", "Dbm+7", "Dbmin(maj7)", "Dbmin#7", "Dbm#7", "Dbmsus", "Dbm7sus", "Dbdim", "Db\u00b0", "Db\u00b03", "Db\u00b0(addM7)", "Db\u00f8", "Db9sus", "Db9-5", "Dbdim3", "Dbomit3(add9)", "Db9sus4", "Db7b9sus"], "D": ["DM", "D(b5)", "Dadd9", "Daddb9", "Dadd#9", "Dm", "Dmb5", "Dm#5", "Dm6", "Dm6(add9)", "Dm7", "Dm7#5", "DmM7", "Dm+7b9", "Dm+7#9", "DmM7(add9)", "Dm7b5", "Dm7b9", "Dm7#9", "Dmb9", "D7", "D7(6)", "D7b5", "Ddim7", "Ddim7(addM7)", "Ddim(b13)", "Daug", "D6", "D6(add9)", "DM7", "DM7#5", "DM7b5", "D9", "D9b5", "Dm9", "Dm7b5b9", "Dm9b5", "Dm(sus9)", "DM9", "DM9#11", "D7b9", "D7#9", "D7#9b13", "D7b5(add13)", "D7(add13)", "D7b5b9", "D7b5#9", "D7#5#9", "Daug7", "Daug7b9", "Daug7#9", "Daug9M7", "D+7b9#11", "Dm+7b9#11", "D11", "D11+", "Dm11", "DM11", "Dm7(add11)", "Dm9#11", "Dm7b9#11", "Dm7(add13)", "D11b9", "D9#5", "D9b6", "D9#11", "D7#9#11", "D7b9#11", "D7#11", "DM7#11", "Dm11b5", "Dsus4", "Dmsus4", "Dm7sus4", "Dsus(addb9)", "Dsus(add9)", "Dsus(add#9)", "D7sus", "D7susb9", "Dsus2", "D7sus2", "Dsus9", "D13sus", "D13susb9", "D13", "D7b13", "D13b5", "D13#9", "D13b9", "DM#11", "DM13", "Dm13", "D13#11", "DM13#11", "D5", "Domit3add9", "D7omit3", "Dm7omit5", "D11#5", "Daug9", "D9+", "D+9", "D+9M7", "D+M7", "Dm(add9)", "D(add9)", "D(addb9)", "D(add#9)", "D69", "Dm69", "Dm(b5)", "Dm7(b9)", "Dm7(#9)", "D9+5", "Dm+5", "Dm+", "DM6", "Dm7-5", "Dm7(omit5)", "D+", "D+7", "D+7#9", "D+7b9", "D7(omit3)", "D(#5)", "D7#5b9", "D7-9", "D7+9", "Dmaj7", "DM7-5", "DM7+5", "DM7(add13)", "D7alt", "D7sus4", "D13sus4", "D7+", "D7#5", "D7+5", "D7-5", "Dsus", "Dmaj9", "Dmaj13", "Dm(maj7)", "Dm+7", "Dmin(maj7)", "Dmin#7", "Dm#7", "Dmsus", "Dm7sus", "Ddim", "D\u00b0", "D\u00b03", "D\u00b0(addM7)", "D\u00f8", "D9sus", "D9-5", "Ddim3", "Domit3(add9)", "D9sus4", "D7b9sus"], "D#": ["D#M", "D#(b5)", "D#add9", "D#addb9", "D#add#9", "D#m", "D#mb5", "D#m#5", "D#m6", "D#m6(add9)", "D#m7", "D#m7#5", "D#mM7", "D#m+7b9", "D#m+7#9", "D#mM7(add9)", "D#m7b5", "D#m7b9", "D#m7#9", "D#mb9", "D#7", "D#7(6)", "D#7b5", "D#dim7", "D#dim7(addM7)", "D#dim(b13)", "D#aug", "D#6", "D#6(add9)", "D#M7", "D#M7#5", "D#M7b5", "D#9", "D#9b5", "D#m9", "D#m7b5b9", "D#m9b5", "D#m(sus9)", "D#M9", "D#M9#11", "D#7b9", "D#7#9", "D#7#9b13", "D#7b5(add13)", "D#7(add13)", "D#7b5b9", "D#7b5#9", "D#7#5#9", "D#aug7", "D#aug7b9", "D#aug7#9", "D#aug9M7", "D#+7b9#11", "D#m+7b9#11", "D#11", "D#11+", "D#m11", "D#M11", "D#m7(add11)", "D#m9#11", "D#m7b9#11", "D#m7(add13)", "D#11b9", "D#9#5", "D#9b6", "D#9#11", "D#7#9#11", "D#7b9#11", "D#7#11", "D#M7#11", "D#m11b5", "D#sus4", "D#msus4", "D#m7sus4", "D#sus(addb9)", "D#sus(add9)", "D#sus(add#9)", "D#7sus", "D#7susb9", "D#sus2", "D#7sus2", "D#sus9", "D#13sus", "D#13susb9", "D#13", "D#7b13", "D#13b5", "D#13#9", "D#13b9", "D#M#11", "D#M13", "D#m13", "D#13#11", "D#M13#11", "D#5", "D#omit3add9", "D#7omit3", "D#m7omit5", "D#11#5", "D#aug9", "D#9+", "D#+9", "D#+9M7", "D#+M7", "D#m(add9)", "D#(add9)", "D#(addb9)", "D#(add#9)", "D#69", "D#m69", "D#m(b5)", "D#m7(b9)", "D#m7(#9)", "D#9+5", "D#m+5", "D#m+", "D#M6", "D#m7-5", "D#m7(omit5)", "D#+", "D#+7", "D#+7#9", "D#+7b9", "D#7(omit3)", "D#(#5)", "D#7#5b9", "D#7-9", "D#7+9", "D#maj7", "D#M7-5", "D#M7+5", "D#M7(add13)", "D#7alt", "D#7sus4", "D#13sus4", "D#7+", "D#7#5", "D#7+5", "D#7-5", "D#sus", "D#maj9", "D#maj13", "D#m(maj7)", "D#m+7", "D#min(maj7)", "D#min#7", "D#m#7", "D#msus", "D#m7sus", "D#dim", "D#\u00b0", "D#\u00b03", "D#\u00b0(addM7)", "D#\u00f8", "D#9sus", "D#9-5", "D#dim3", "D#omit3(add9)", "D#9sus4", "D#7b9sus"], "Eb": ["EbM", "Eb(b5)", "Ebadd9", "Ebaddb9", "Ebadd#9", "Ebm", "Ebmb5", "Ebm#5", "Ebm6", "Ebm6(add9)", "Ebm7", "Ebm7#5", "EbmM7", "Ebm+7b9", "Ebm+7#9", "EbmM7(add9)", "Ebm7b5", "Ebm7b9", "Ebm7#9", "Ebmb9", "Eb7", "Eb7(6)", "Eb7b5", "Ebdim7", "Ebdim7(addM7)", "Ebdim(b13)", "Ebaug", "Eb6", "Eb6(add9)", "EbM7", "EbM7#5", "EbM7b5", "Eb9", "Eb9b5", "Ebm9", "Ebm7b5b9", "Ebm9b5", "Ebm(sus9)", "EbM9", "EbM9#11", "Eb7b9", "Eb7#9", "Eb7#9b13", "Eb7b5(add13)", "Eb7(add13)", "Eb7b5b9", "Eb7b5#9", "Eb7#5#9", "Ebaug7", "Ebaug7b9", "Ebaug7#9", "Ebaug9M7", "Eb+7b9#11", "Ebm+7b9#11", "Eb11", "Eb11+", "Ebm11", "EbM11", "Ebm7(add11)", "Ebm9#11", "Ebm7b9#11", "Ebm7(add13)", "Eb11b9", "Eb9#5", "Eb9b6", "Eb9#11", "Eb7#9#11", "Eb7b9#11", "Eb7#11", "EbM7#11", "Ebm11b5", "Ebsus4", "Ebmsus4", "Ebm7sus4", "Ebsus(addb9)", "Ebsus(add9)", "Ebsus(add#9)", "Eb7sus", "Eb7susb9", "Ebsus2", "Eb7sus2", "Ebsus9", "Eb13sus", "Eb13susb9", "Eb13", "Eb7b13", "Eb13b5", "Eb13#9", "Eb13b9", "EbM#11", "EbM13", "Ebm13", "Eb13#11", "EbM13#11", "Eb5", "Ebomit3add9", "Eb7omit3", "Ebm7omit5", "Eb11#5", "Ebaug9", "Eb9+", "Eb+9", "Eb+9M7", "Eb+M7", "Ebm(add9)", "Eb(add9)", "Eb(addb9)", "Eb(add#9)", "Eb69", "Ebm69", "Ebm(b5)", "Ebm7(b9)", "Ebm7(#9)", "Eb9+5", "Ebm+5", "Ebm+", "EbM6", "Ebm7-5", "Ebm7(omit5)", "Eb+", "Eb+7", "Eb+7#9", "Eb+7b9", "Eb7(omit3)", "Eb(#5)", "Eb7#5b9", "Eb7-9", "Eb7+9", "Ebmaj7", "EbM7-5", "EbM7+5", "EbM7(add13)", "Eb7alt", "Eb7sus4", "Eb13sus4", "Eb7+", "Eb7#5", "Eb7+5", "Eb7-5", "Ebsus", "Ebmaj9", "Ebmaj13", "Ebm(maj7)", "Ebm+7", "Ebmin(maj7)", "Ebmin#7", "Ebm#7", "Ebmsus", "Ebm7sus", "Ebdim", "Eb\u00b0", "Eb\u00b03", "Eb\u00b0(addM7)", "Eb\u00f8", "Eb9sus", "Eb9-5", "Ebdim3", "Ebomit3(add9)", "Eb9sus4", "Eb7b9sus"], "E": ["EM", "E(b5)", "Eadd9", "Eaddb9", "Eadd#9", "Em", "Emb5", "Em#5", "Em6", "Em6(add9)", "Em7", "Em7#5", "EmM7", "Em+7b9", "Em+7#9", "EmM7(add9)", "Em7b5", "Em7b9", "Em7#9", "Emb9", "E7", "E7(6)", "E7b5", "Edim7", "Edim7(addM7)", "Edim(b13)", "Eaug", "E6", "E6(add9)", "EM7", "EM7#5", "EM7b5", "E9", "E9b5", "Em9", "Em7b5b9", "Em9b5", "Em(sus9)", "EM9", "EM9#11", "E7b9", "E7#9", "E7#9b13", "E7b5(add13)", "E7(add13)", "E7b5b9", "E7b5#9", "E7#5#9", "Eaug7", "Eaug7b9", "Eaug7#9", "Eaug9M7", "E+7b9#11", "Em+7b9#11", "E11", "E11+", "Em11", "EM11", "Em7(add11)", "Em9#11", "Em7b9#11", "Em7(add13)", "E11b9", "E9#5", "E9b6", "E9#11", "E7#9#11", "E7b9#11", "E7#11", "EM7#11", "Em11b5", "Esus4", "Emsus4", "Em7sus4", "Esus(addb9)", "Esus(add9)", "Esus(add#9)", "E7sus", "E7susb9", "Esus2", "E7sus2", "Esus9", "E13sus", "E13susb9", "E13", "E7b13", "E13b5", "E13#9", "E13b9", "EM#11", "EM13", "Em13", "E13#11", "EM13#11", "E5", "Eomit3add9", "E7omit3", "Em7omit5", "E11#5", "Eaug9", "E9+", "E+9", "E+9M7", "E+M7", "Em(add9)", "E(add9)", "E(addb9)", "E(add#9)", "E69", "Em69", "Em(b5)", "Em7(b9)", "Em7(#9)", "E9+5", "Em+5", "Em+", "EM6", "Em7-5", "Em7(omit5)", "E+", "E+7", "E+7#9", "E+7b9", "E7(omit3)", "E(#5)", "E7#5b9", "E7-9", "E7+9", "Emaj7", "EM7-5", "EM7+5", "EM7(add13)", "E7alt", "E7sus4", "E13sus4", "E7+", "E7#5", "E7+5", "E7-5", "Esus", "Emaj9", "Emaj13", "Em(maj7)", "Em+7", "Emin(maj7)", "Emin#7", "Em#7", "Emsus", "Em7sus", "Edim", "E\u00b0", "E\u00b03", "E\u00b0(addM7)", "E\u00f8", "E9sus", "E9-5", "Edim3", "Eomit3(add9)", "E9sus4", "E7b9sus"], "E#": ["E#M", "E#(b5)", "E#add9", "E#addb9", "E#add#9", "E#m", "E#mb5", "E#m#5", "E#m6", "E#m6(add9)", "E#m7", "E#m7#5", "E#mM7", "E#m+7b9", "E#m+7#9", "E#mM7(add9)", "E#m7b5", "E#m7b9", "E#m7#9", "E#mb9", "E#7", "E#7(6)", "E#7b5", "E#dim7", "E#dim7(addM7)", "E#dim(b13)", "E#aug", "E#6", "E#6(add9)", "E#M7", "E#M7#5", "E#M7b5", "E#9", "E#9b5", "E#m9", "E#m7b5b9", "E#m9b5", "E#m(sus9)", "E#M9", "E#M9#11", "E#7b9", "E#7#9", "E#7#9b13", "E#7b5(add13)", "E#7(add13)", "E#7b5b9", "E#7b5#9", "E#7#5#9", "E#aug7", "E#aug7b9", "E#aug7#9", "E#aug9M7", "E#+7b9#11", "E#m+7b9#11", "E#11", "E#11+", "E#m11", "E#M11", "E#m7(add11)", "E#m9#11", "E#m7b9#11", "E#m7(add13)", "E#11b9", "E#9#5", "E#9b6", "E#9#11", "E#7#9#11", "E#7b9#11", "E#7#11", "E#M7#11", "E#m11b5", "E#sus4", "E#msus4", "E#m7sus4", "E#sus(addb9)", "E#sus(add9)", "E#sus(add#9)", "E#7sus", "E#7susb9", "E#sus2", "E#7sus2", "E#sus9", "E#13sus", "E#13susb9", "E#13", "E#7b13", "E#13b5", "E#13#9", "E#13b9", "E#M#11", "E#M13", "E#m13", "E#13#11", "E#M13#11", "E#5", "E#omit3add9", "E#7omit3", "E#m7omit5", "E#11#5", "E#aug9", "E#9+", "E#+9", "E#+9M7", "E#+M7", "E#m(add9)", "E#(add9)", "E#(addb9)", "E#(add#9)", "E#69", "E#m69", "E#m(b5)", "E#m7(b9)", "E#m7(#9)", "E#9+5", "E#m+5", "E#m+", "E#M6", "E#m7-5", "E#m7(omit5)", "E#+", "E#+7", "E#+7#9", "E#+7b9", "E#7(omit3)", "E#(#5)", "E#7#5b9", "E#7-9", "E#7+9", "E#maj7", "E#M7-5", "E#M7+5", "E#M7(add13)", "E#7alt", "E#7sus4", "E#13sus4", "E#7+", "E#7#5", "E#7+5", "E#7-5", "E#sus", "E#maj9", "E#maj13", "E#m(maj7)", "E#m+7", "E#min(maj7)", "E#min#7", "E#m#7", "E#msus", "E#m7sus", "E#dim", "E#\u00b0", "E#\u00b03", "E#\u00b0(addM7)", "E#\u00f8", "E#9sus", "E#9-5", "E#dim3", "E#omit3(add9)", "E#9sus4", "E#7b9sus"], "Fb": ["FbM", "Fb(b5)", "Fbadd9", "Fbaddb9", "Fbadd#9", "Fbm", "Fbmb5", "Fbm#5", "Fbm6", "Fbm6(add9)", "Fbm7", "Fbm7#5", "FbmM7", "Fbm+7b9", "Fbm+7#9", "FbmM7(add9)", "Fbm7b5", "Fbm7b9", "Fbm7#9", "Fbmb9", "Fb7", "Fb7(6)", "Fb7b5", "Fbdim7", "Fbdim7(addM7)", "Fbdim(b13)", "Fbaug", "Fb6", "Fb6(add9)", "FbM7", "FbM7#5", "FbM7b5", "Fb9", "Fb9b5", "Fbm9", "Fbm7b5b9", "Fbm9b5", "Fbm(sus9)", "FbM9", "FbM9#11", "Fb7b9", "Fb7#9", "Fb7#9b13", "Fb7b5(add13)", "Fb7(add13)", "Fb7b5b9", "Fb7b5#9", "Fb7#5#9", "Fbaug7", "Fbaug7b9", "Fbaug7#9", "Fbaug9M7", "Fb+7b9#11", "Fbm+7b9#11", "Fb11", "Fb11+", "Fbm11", "FbM11", "Fbm7(add11)", "Fbm9#11", "Fbm7b9#11", "Fbm7(add13)", "Fb11b9", "Fb9#5", "Fb9b6", "Fb9#11", "Fb7#9#11", "Fb7b9#11", "Fb7#11", "FbM7#11", "Fbm11b5", "Fbsus4", "Fbmsus4", "Fbm7sus4", "Fbsus(addb9)", "Fbsus(add9)", "Fbsus(add#9)", "Fb7sus", "Fb7susb9", "Fbsus2", "Fb7sus2", "Fbsus9", "Fb13sus", "Fb13susb9", "Fb13", "Fb7b13", "Fb13b5", "Fb13#9", "Fb13b9", "FbM#11", "FbM13", "Fbm13", "Fb13#11", "FbM13#11", "Fb5", "Fbomit3add9", "Fb7omit3", "Fbm7omit5", "Fb11#5", "Fbaug9", "Fb9+", "Fb+9", "Fb+9M7", "Fb+M7", "Fbm(add9)", "Fb(add9)", "Fb(addb9)", "Fb(add#9)", "Fb69", "Fbm69", "Fbm(b5)", "Fbm7(b9)", "Fbm7(#9)", "Fb9+5", "Fbm+5", "Fbm+", "FbM6", "Fbm7-5", "Fbm7(omit5)", "Fb+", "Fb+7", "Fb+7#9", "Fb+7b9", "Fb7(omit3)", "Fb(#5)", "Fb7#5b9", "Fb7-9", "Fb7+9", "Fbmaj7", "FbM7-5", "FbM7+5", "FbM7(add13)", "Fb7alt", "Fb7sus4", "Fb13sus4", "Fb7+", "Fb7#5", "Fb7+5", "Fb7-5", "Fbsus", "Fbmaj9", "Fbmaj13", "Fbm(maj7)", "Fbm+7", "Fbmin(maj7)", "Fbmin#7", "Fbm#7", "Fbmsus", "Fbm7sus", "Fbdim", "Fb\u00b0", "Fb\u00b03", "Fb\u00b0(addM7)", "Fb\u00f8", "Fb9sus", "Fb9-5", "Fbdim3", "Fbomit3(add9)", "Fb9sus4", "Fb7b9sus"], "F": ["FM", "F(b5)", "Fadd9", "Faddb9", "Fadd#9", "Fm", "Fmb5", "Fm#5", "Fm6", "Fm6(add9)", "Fm7", "Fm7#5", "FmM7", "Fm+7b9", "Fm+7#9", "FmM7(add9)", "Fm7b5", "Fm7b9", "Fm7#9", "Fmb9", "F7", "F7(6)", "F7b5", "Fdim7", "Fdim7(addM7)", "Fdim(b13)", "Faug", "F6", "F6(add9)", "FM7", "FM7#5", "FM7b5", "F9", "F9b5", "Fm9", "Fm7b5b9", "Fm9b5", "Fm(sus9)", "FM9", "FM9#11", "F7b9", "F7#9", "F7#9b13", "F7b5(add13)", "F7(add13)", "F7b5b9", "F7b5#9", "F7#5#9", "Faug7", "Faug7b9", "Faug7#9", "Faug9M7", "F+7b9#11", "Fm+7b9#11", "F11", "F11+", "Fm11", "FM11", "Fm7(add11)", "Fm9#11", "Fm7b9#11", "Fm7(add13)", "F11b9", "F9#5", "F9b6", "F9#11", "F7#9#11", "F7b9#11", "F7#11", "FM7#11", "Fm11b5", "Fsus4", "Fmsus4", "Fm7sus4", "Fsus(addb9)", "Fsus(add9)", "Fsus(add#9)", "F7sus", "F7susb9", "Fsus2", "F7sus2", "Fsus9", "F13sus", "F13susb9", "F13", "F7b13", "F13b5", "F13#9", "F13b9", "FM#11", "FM13", "Fm13", "F13#11", "FM13#11", "F5", "Fomit3add9", "F7omit3", "Fm7omit5", "F11#5", "Faug9", "F9+", "F+9", "F+9M7", "F+M7", "Fm(add9)", "F(add9)", "F(addb9)", "F(add#9)", "F69", "Fm69", "Fm(b5)", "Fm7(b9)", "Fm7(#9)", "F9+5", "Fm+5", "Fm+", "FM6", "Fm7-5", "Fm7(omit5)", "F+", "F+7", "F+7#9", "F+7b9", "F7(omit3)", "F(#5)", "F7#5b9", "F7-9", "F7+9", "Fmaj7", "FM7-5", "FM7+5", "FM7(add13)", "F7alt", "F7sus4", "F13sus4", "F7+", "F7#5", "F7+5", "F7-5", "Fsus", "Fmaj9", "Fmaj13", "Fm(maj7)", "Fm+7", "Fmin(maj7)", "Fmin#7", "Fm#7", "Fmsus", "Fm7sus", "Fdim", "F\u00b0", "F\u00b03", "F\u00b0(addM7)", "F\u00f8", "F9sus", "F9-5", "Fdim3", "Fomit3(add9)", "F9sus4", "F7b9sus"], "F#": ["F#M", "F#(b5)", "F#add9", "F#addb9", "F#add#9", "F#m", "F#mb5", "F#m#5", "F#m6", "F#m6(add9)", "F#m7", "F#m7#5", "F#mM7", "F#m+7b9", "F#m+7#9", "F#mM7(add9)", "F#m7b5", "F#m7b9", "F#m7#9", "F#mb9", "F#7", "F#7(6)", "F#7b5", "F#dim7", "F#dim7(addM7)", "F#dim(b13)", "F#aug", "F#6", "F#6(add9)", "F#M7", "F#M7#5", "F#M7b5", "F#9", "F#9b5", "F#m9", "F#m7b5b9", "F#m9b5", "F#m(sus9)", "F#M9", "F#M9#11", "F#7b9", "F#7#9", "F#7#9b13", "F#7b5(add13)", "F#7(add13)", "F#7b5b9", "F#7b5#9", "F#7#5#9", "F#aug7", "F#aug7b9", "F#aug7#9", "F#aug9M7", "F#+7b9#11", "F#m+7b9#11", "F#11", "F#11+", "F#m11", "F#M11", "F#m7(add11)", "F#m9#11", "F#m7b9#11", "F#m7(add13)", "F#11b9", "F#9#5", "F#9b6", "F#9#11", "F#7#9#11", "F#7b9#11", "F#7#11", "F#M7#11", "F#m11b5", "F#sus4", "F#msus4", "F#m7sus4", "F#sus(addb9)", "F#sus(add9)", "F#sus(add#9)", "F#7sus", "F#7susb9", "F#sus2", "F#7sus2", "F#sus9", "F#13sus", "F#13susb9", "F#13", "F#7b13", "F#13b5", "F#13#9", "F#13b9", "F#M#11", "F#M13", "F#m13", "F#13#11", "F#M13#11", "F#5", "F#omit3add9", "F#7omit3", "F#m7omit5", "F#11#5", "F#aug9", "F#9+", "F#+9", "F#+9M7", "F#+M7", "F#m(add9)", "F#(add9)", "F#(addb9)", "F#(add#9)", "F#69", "F#m69", "F#m(b5)", "F#m7(b9)", "F#m7(#9)", "F#9+5", "F#m+5", "F#m+", "F#M6", "F#m7-5", "F#m7(omit5)", "F#+", "F#+7", "F#+7#9", "F#+7b9", "F#7(omit3)", "F#(#5)", "F#7#5b9", "F#7-9", "F#7+9", "F#maj7", "F#M7-5", "F#M7+5", "F#M7(add13)", "F#7alt", "F#7sus4", "F#13sus4", "F#7+", "F#7#5", "F#7+5", "F#7-5", "F#sus", "F#maj9", "F#maj13", "F#m(maj7)", "F#m+7", "F#min(maj7)", "F#min#7", "F#m#7", "F#msus", "F#m7sus", "F#dim", "F#\u00b0", "F#\u00b03", "F#\u00b0(addM7)", "F#\u00f8", "F#9sus", "F#9-5", "F#dim3", "F#omit3(add9)", "F#9sus4", "F#7b9sus"], "Gb": ["GbM", "Gb(b5)", "Gbadd9", "Gbaddb9", "Gbadd#9", "Gbm", "Gbmb5", "Gbm#5", "Gbm6", "Gbm6(add9)", "Gbm7", "Gbm7#5", "GbmM7", "Gbm+7b9", "Gbm+7#9", "GbmM7(add9)", "Gbm7b5", "Gbm7b9", "Gbm7#9", "Gbmb9", "Gb7", "Gb7(6)", "Gb7b5", "Gbdim7", "Gbdim7(addM7)", "Gbdim(b13)", "Gbaug", "Gb6", "Gb6(add9)", "GbM7", "GbM7#5", "GbM7b5", "Gb9", "Gb9b5", "Gbm9", "Gbm7b5b9", "Gbm9b5", "Gbm(sus9)", "GbM9", "GbM9#11", "Gb7b9", "Gb7#9", "Gb7#9b13", "Gb7b5(add13)", "Gb7(add13)", "Gb7b5b9", "Gb7b5#9", "Gb7#5#9", "Gbaug7", "Gbaug7b9", "Gbaug7#9", "Gbaug9M7", "Gb+7b9#11", "Gbm+7b9#11", "Gb11", "Gb11+", "Gbm11", "GbM11", "Gbm7(add11)", "Gbm9#11", "Gbm7b9#11", "Gbm7(add13)", "Gb11b9", "Gb9#5", "Gb9b6", "Gb9#11", "Gb7#9#11", "Gb7b9#11", "Gb7#11", "GbM7#11", "Gbm11b5", "Gbsus4", "Gbmsus4", "Gbm7sus4", "Gbsus(addb9)", "Gbsus(add9)", "Gbsus(add#9)", "Gb7sus", "Gb7susb9", "Gbsus2", "Gb7sus2", "Gbsus9", "Gb13sus", "Gb13susb9", "Gb13", "Gb7b13", "Gb13b5", "Gb13#9", "Gb13b9", "GbM#11", "GbM13", "Gbm13", "Gb13#11", "GbM13#11", "Gb5", "Gbomit3add9", "Gb7omit3", "Gbm7omit5", "Gb11#5", "Gbaug9", "Gb9+", "Gb+9", "Gb+9M7", "Gb+M7", "Gbm(add9)", "Gb(add9)", "Gb(addb9)", "Gb(add#9)", "Gb69", "Gbm69", "Gbm(b5)", "Gbm7(b9)", "Gbm7(#9)", "Gb9+5", "Gbm+5", "Gbm+", "GbM6", "Gbm7-5", "Gbm7(omit5)", "Gb+", "Gb+7", "Gb+7#9", "Gb+7b9", "Gb7(omit3)", "Gb(#5)", "Gb7#5b9", "Gb7-9", "Gb7+9", "Gbmaj7", "GbM7-5", "GbM7+5", "GbM7(add13)", "Gb7alt", "Gb7sus4", "Gb13sus4", "Gb7+", "Gb7#5", "Gb7+5", "Gb7-5", "Gbsus", "Gbmaj9", "Gbmaj13", "Gbm(maj7)", "Gbm+7", "Gbmin(maj7)", "Gbmin#7", "Gbm#7", "Gbmsus", "Gbm7sus", "Gbdim", "Gb\u00b0", "Gb\u00b03", "Gb\u00b0(addM7)", "Gb\u00f8", "Gb9sus", "Gb9-5", "Gbdim3", "Gbomit3(add9)", "Gb9sus4", "Gb7b9sus"], "G": ["GM", "G(b5)", "Gadd9", "Gaddb9", "Gadd#9", "Gm", "Gmb5", "Gm#5", "Gm6", "Gm6(add9)", "Gm7", "Gm7#5", "GmM7", "Gm+7b9", "Gm+7#9", "GmM7(add9)", "Gm7b5", "Gm7b9", "Gm7#9", "Gmb9", "G7", "G7(6)", "G7b5", "Gdim7", "Gdim7(addM7)", "Gdim(b13)", "Gaug", "G6", "G6(add9)", "GM7", "GM7#5", "GM7b5", "G9", "G9b5", "Gm9", "Gm7b5b9", "Gm9b5", "Gm(sus9)", "GM9", "GM9#11", "G7b9", "G7#9", "G7#9b13", "G7b5(add13)", "G7(add13)", "G7b5b9", "G7b5#9", "G7#5#9", "Gaug7", "Gaug7b9", "Gaug7#9", "Gaug9M7", "G+7b9#11", "Gm+7b9#11", "G11", "G11+", "Gm11", "GM11", "Gm7(add11)", "Gm9#11", "Gm7b9#11", "Gm7(add13)", "G11b9", "G9#5", "G9b6", "G9#11", "G7#9#11", "G7b9#11", "G7#11", "GM7#11", "Gm11b5", "Gsus4", "Gmsus4", "Gm7sus4", "Gsus(addb9)", "Gsus(add9)", "Gsus(add#9)", "G7sus", "G7susb9", "Gsus2", "G7sus2", "Gsus9", "G13sus", "G13susb9", "G13", "G7b13", "G13b5", "G13#9", "G13b9", "GM#11", "GM13", "Gm13", "G13#11", "GM13#11", "G5", "Gomit3add9", "G7omit3", "Gm7omit5", "G11#5", "Gaug9", "G9+", "G+9", "G+9M7", "G+M7", "Gm(add9)", "G(add9)", "G(addb9)", "G(add#9)", "G69", "Gm69", "Gm(b5)", "Gm7(b9)", "Gm7(#9)", "G9+5", "Gm+5", "Gm+", "GM6", "Gm7-5", "Gm7(omit5)", "G+", "G+7", "G+7#9", "G+7b9", "G7(omit3)", "G(#5)", "G7#5b9", "G7-9", "G7+9", "Gmaj7", "GM7-5", "GM7+5", "GM7(add13)", "G7alt", "G7sus4", "G13sus4", "G7+", "G7#5", "G7+5", "G7-5", "Gsus", "Gmaj9", "Gmaj13", "Gm(maj7)", "Gm+7", "Gmin(maj7)", "Gmin#7", "Gm#7", "Gmsus", "Gm7sus", "Gdim", "G\u00b0", "G\u00b03", "G\u00b0(addM7)", "G\u00f8", "G9sus", "G9-5", "Gdim3", "Gomit3(add9)", "G9sus4", "G7b9sus"], "G#": ["G#M", "G#(b5)", "G#add9", "G#addb9", "G#add#9", "G#m", "G#mb5", "G#m#5", "G#m6", "G#m6(add9)", "G#m7", "G#m7#5", "G#mM7", "G#m+7b9", "G#m+7#9", "G#mM7(add9)", "G#m7b5", "G#m7b9", "G#m7#9", "G#mb9", "G#7", "G#7(6)", "G#7b5", "G#dim7", "G#dim7(addM7)", "G#dim(b13)", "G#aug", "G#6", "G#6(add9)", "G#M7", "G#M7#5", "G#M7b5", "G#9", "G#9b5", "G#m9", "G#m7b5b9", "G#m9b5", "G#m(sus9)", "G#M9", "G#M9#11", "G#7b9", "G#7#9", "G#7#9b13", "G#7b5(add13)", "G#7(add13)", "G#7b5b9", "G#7b5#9", "G#7#5#9", "G#aug7", "G#aug7b9", "G#aug7#9", "G#aug9M7", "G#+7b9#11", "G#m+7b9#11", "G#11", "G#11+", "G#m11", "G#M11", "G#m7(add11)", "G#m9#11", "G#m7b9#11", "G#m7(add13)", "G#11b9", "G#9#5", "G#9b6", "G#9#11", "G#7#9#11", "G#7b9#11", "G#7#11", "G#M7#11", "G#m11b5", "G#sus4", "G#msus4", "G#m7sus4", "G#sus(addb9)", "G#sus(add9)", "G#sus(add#9)", "G#7sus", "G#7susb9", "G#sus2", "G#7sus2", "G#sus9", "G#13sus", "G#13susb9", "G#13", "G#7b13", "G#13b5", "G#13#9", "G#13b9", "G#M#11", "G#M13", "G#m13", "G#13#11", "G#M13#11", "G#5", "G#omit3add9", "G#7omit3", "G#m7omit5", "G#11#5", "G#aug9", "G#9+", "G#+9", "G#+9M7", "G#+M7", "G#m(add9)", "G#(add9)", "G#(addb9)", "G#(add#9)", "G#69", "G#m69", "G#m(b5)", "G#m7(b9)", "G#m7(#9)", "G#9+5", "G#m+5", "G#m+", "G#M6", "G#m7-5", "G#m7(omit5)", "G#+", "G#+7", "G#+7#9", "G#+7b9", "G#7(omit3)", "G#(#5)", "G#7#5b9", "G#7-9", "G#7+9", "G#maj7", "G#M7-5", "G#M7+5", "G#M7(add13)", "G#7alt", "G#7sus4", "G#13sus4", "G#7+", "G#7#5", "G#7+5", "G#7-5", "G#sus", "G#maj9", "G#maj13", "G#m(maj7)", "G#m+7", "G#min(maj7)", "G#min#7", "G#m#7", "G#msus", "G#m7sus", "G#dim", "G#\u00b0", "G#\u00b03", "G#\u00b0(addM7)", "G#\u00f8", "G#9sus", "G#9-5", "G#dim3", "G#omit3(add9)", "G#9sus4", "G#7b9sus"], "Ab": ["AbM", "Ab(b5)", "Abadd9", "Abaddb9", "Abadd#9", "Abm", "Abmb5", "Abm#5", "Abm6", "Abm6(add9)", "Abm7", "Abm7#5", "AbmM7", "Abm+7b9", "Abm+7#9", "AbmM7(add9)", "Abm7b5", "Abm7b9", "Abm7#9", "Abmb9", "Ab7", "Ab7(6)", "Ab7b5", "Abdim7", "Abdim7(addM7)", "Abdim(b13)", "Abaug", "Ab6", "Ab6(add9)", "AbM7", "AbM7#5", "AbM7b5", "Ab9", "Ab9b5", "Abm9", "Abm7b5b9", "Abm9b5", "Abm(sus9)", "AbM9", "AbM9#11", "Ab7b9", "Ab7#9", "Ab7#9b13", "Ab7b5(add13)", "Ab7(add13)", "Ab7b5b9", "Ab7b5#9", "Ab7#5#9", "Abaug7", "Abaug7b9", "Abaug7#9", "Abaug9M7", "Ab+7b9#11", "Abm+7b9#11", "Ab11", "Ab11+", "Abm11", "AbM11", "Abm7(add11)", "Abm9#11", "Abm7b9#11", "Abm7(add13)", "Ab11b9", "Ab9#5", "Ab9b6", "Ab9#11", "Ab7#9#11", "Ab7b9#11", "Ab7#11", "AbM7#11", "Abm11b5", "Absus4", "Abmsus4", "Abm7sus4", "Absus(addb9)", "Absus(add9)", "Absus(add#9)", "Ab7sus", "Ab7susb9", "Absus2", "Ab7sus2", "Absus9", "Ab13sus", "Ab13susb9", "Ab13", "Ab7b13", "Ab13b5", "Ab13#9", "Ab13b9", "AbM#11", "AbM13", "Abm13", "Ab13#11", "AbM13#11", "Ab5", "Abomit3add9", "Ab7omit3", "Abm7omit5", "Ab11#5", "Abaug9", "Ab9+", "Ab+9", "Ab+9M7", "Ab+M7", "Abm(add9)", "Ab(add9)", "Ab(addb9)", "Ab(add#9)", "Ab69", "Abm69", "Abm(b5)", "Abm7(b9)", "Abm7(#9)", "Ab9+5", "Abm+5", "Abm+", "AbM6", "Abm7-5", "Abm7(omit5)", "Ab+", "Ab+7", "Ab+7#9", "Ab+7b9", "Ab7(omit3)", "Ab(#5)", "Ab7#5b9", "Ab7-9", "Ab7+9", "Abmaj7", "AbM7-5", "AbM7+5", "AbM7(add13)", "Ab7alt", "Ab7sus4", "Ab13sus4", "Ab7+", "Ab7#5", "Ab7+5", "Ab7-5", "Absus", "Abmaj9", "Abmaj13", "Abm(maj7)", "Abm+7", "Abmin(maj7)", "Abmin#7", "Abm#7", "Abmsus", "Abm7sus", "Abdim", "Ab\u00b0", "Ab\u00b03", "Ab\u00b0(addM7)", "Ab\u00f8", "Ab9sus", "Ab9-5", "Abdim3", "Abomit3(add9)", "Ab9sus4", "Ab7b9sus"], "A": ["AM", "A(b5)", "Aadd9", "Aaddb9", "Aadd#9", "Am", "Amb5", "Am#5", "Am6", "Am6(add9)", "Am7", "Am7#5", "AmM7", "Am+7b9", "Am+7#9", "AmM7(add9)", "Am7b5", "Am7b9", "Am7#9", "Amb9", "A7", "A7(6)", "A7b5", "Adim7", "Adim7(addM7)", "Adim(b13)", "Aaug", "A6", "A6(add9)", "AM7", "AM7#5", "AM7b5", "A9", "A9b5", "Am9", "Am7b5b9", "Am9b5", "Am(sus9)", "AM9", "AM9#11", "A7b9", "A7#9", "A7#9b13", "A7b5(add13)", "A7(add13)", "A7b5b9", "A7b5#9", "A7#5#9", "Aaug7", "Aaug7b9", "Aaug7#9", "Aaug9M7", "A+7b9#11", "Am+7b9#11", "A11", "A11+", "Am11", "AM11", "Am7(add11)", "Am9#11", "Am7b9#11", "Am7(add13)", "A11b9", "A9#5", "A9b6", "A9#11", "A7#9#11", "A7b9#11", "A7#11", "AM7#11", "Am11b5", "Asus4", "Amsus4", "Am7sus4", "Asus(addb9)", "Asus(add9)", "Asus(add#9)", "A7sus", "A7susb9", "Asus2", "A7sus2", "Asus9", "A13sus", "A13susb9", "A13", "A7b13", "A13b5", "A13#9", "A13b9", "AM#11", "AM13", "Am13", "A13#11", "AM13#11", "A5", "Aomit3add9", "A7omit3", "Am7omit5", "A11#5", "Aaug9", "A9+", "A+9", "A+9M7", "A+M7", "Am(add9)", "A(add9)", "A(addb9)", "A(add#9)", "A69", "Am69", "Am(b5)", "Am7(b9)", "Am7(#9)", "A9+5", "Am+5", "Am+", "AM6", "Am7-5", "Am7(omit5)", "A+", "A+7", "A+7#9", "A+7b9", "A7(omit3)", "A(#5)", "A7#5b9", "A7-9", "A7+9", "Amaj7", "AM7-5", "AM7+5", "AM7(add13)", "A7alt", "A7sus4", "A13sus4", "A7+", "A7#5", "A7+5", "A7-5", "Asus", "Amaj9", "Amaj13", "Am(maj7)", "Am+7", "Amin(maj7)", "Amin#7", "Am#7", "Amsus", "Am7sus", "Adim", "A\u00b0", "A\u00b03", "A\u00b0(addM7)", "A\u00f8", "A9sus", "A9-5", "Adim3", "Aomit3(add9)", "A9sus4", "A7b9sus"], "A#": ["A#M", "A#(b5)", "A#add9", "A#addb9", "A#add#9", "A#m", "A#mb5", "A#m#5", "A#m6", "A#m6(add9)", "A#m7", "A#m7#5", "A#mM7", "A#m+7b9", "A#m+7#9", "A#mM7(add9)", "A#m7b5", "A#m7b9", "A#m7#9", "A#mb9", "A#7", "A#7(6)", "A#7b5", "A#dim7", "A#dim7(addM7)", "A#dim(b13)", "A#aug", "A#6", "A#6(add9)", "A#M7", "A#M7#5", "A#M7b5", "A#9", "A#9b5", "A#m9", "A#m7b5b9", "A#m9b5", "A#m(sus9)", "A#M9", "A#M9#11", "A#7b9", "A#7#9", "A#7#9b13", "A#7b5(add13)", "A#7(add13)", "A#7b5b9", "A#7b5#9", "A#7#5#9", "A#aug7", "A#aug7b9", "A#aug7#9", "A#aug9M7", "A#+7b9#11", "A#m+7b9#11", "A#11", "A#11+", "A#m11", "A#M11", "A#m7(add11)", "A#m9#11", "A#m7b9#11", "A#m7(add13)", "A#11b9", "A#9#5", "A#9b6", "A#9#11", "A#7#9#11", "A#7b9#11", "A#7#11", "A#M7#11", "A#m11b5", "A#sus4", "A#msus4", "A#m7sus4", "A#sus(addb9)", "A#sus(add9)", "A#sus(add#9)", "A#7sus", "A#7susb9", "A#sus2", "A#7sus2", "A#sus9", "A#13sus", "A#13susb9", "A#13", "A#7b13", "A#13b5", "A#13#9", "A#13b9", "A#M#11", "A#M13", "A#m13", "A#13#11", "A#M13#11", "A#5", "A#omit3add9", "A#7omit3", "A#m7omit5", "A#11#5", "A#aug9", "A#9+", "A#+9", "A#+9M7", "A#+M7", "A#m(add9)", "A#(add9)", "A#(addb9)", "A#(add#9)", "A#69", "A#m69", "A#m(b5)", "A#m7(b9)", "A#m7(#9)", "A#9+5", "A#m+5", "A#m+", "A#M6", "A#m7-5", "A#m7(omit5)", "A#+", "A#+7", "A#+7#9", "A#+7b9", "A#7(omit3)", "A#(#5)", "A#7#5b9", "A#7-9", "A#7+9", "A#maj7", "A#M7-5", "A#M7+5", "A#M7(add13)", "A#7alt", "A#7sus4", "A#13sus4", "A#7+", "A#7#5", "A#7+5", "A#7-5", "A#sus", "A#maj9", "A#maj13", "A#m(maj7)", "A#m+7", "A#min(maj7)", "A#min#7", "A#m#7", "A#msus", "A#m7sus", "A#dim", "A#\u00b0", "A#\u00b03", "A#\u00b0(addM7)", "A#\u00f8", "A#9sus", "A#9-5", "A#dim3", "A#omit3(add9)", "A#9sus4", "A#7b9sus"], "Bb": ["BbM", "Bb(b5)", "Bbadd9", "Bbaddb9", "Bbadd#9", "Bbm", "Bbmb5", "Bbm#5", "Bbm6", "Bbm6(add9)", "Bbm7", "Bbm7#5", "BbmM7", "Bbm+7b9", "Bbm+7#9", "BbmM7(add9)", "Bbm7b5", "Bbm7b9", "Bbm7#9", "Bbmb9", "Bb7", "Bb7(6)", "Bb7b5", "Bbdim7", "Bbdim7(addM7)", "Bbdim(b13)", "Bbaug", "Bb6", "Bb6(add9)", "BbM7", "BbM7#5", "BbM7b5", "Bb9", "Bb9b5", "Bbm9", "Bbm7b5b9", "Bbm9b5", "Bbm(sus9)", "BbM9", "BbM9#11", "Bb7b9", "Bb7#9", "Bb7#9b13", "Bb7b5(add13)", "Bb7(add13)", "Bb7b5b9", "Bb7b5#9", "Bb7#5#9", "Bbaug7", "Bbaug7b9", "Bbaug7#9", "Bbaug9M7", "Bb+7b9#11", "Bbm+7b9#11", "Bb11", "Bb11+", "Bbm11", "BbM11", "Bbm7(add11)", "Bbm9#11", "Bbm7b9#11", "Bbm7(add13)", "Bb11b9", "Bb9#5", "Bb9b6", "Bb9#11", "Bb7#9#11", "Bb7b9#11", "Bb7#11", "BbM7#11", "Bbm11b5", "Bbsus4", "Bbmsus4", "Bbm7sus4", "Bbsus(addb9)", "Bbsus(add9)", "Bbsus(add#9)", "Bb7sus", "Bb7susb9", "Bbsus2", "Bb7sus2", "Bbsus9", "Bb13sus", "Bb13susb9", "Bb13", "Bb7b13", "Bb13b5", "Bb13#9", "Bb13b9", "BbM#11", "BbM13", "Bbm13", "Bb13#11", "BbM13#11", "Bb5", "Bbomit3add9", "Bb7omit3", "Bbm7omit5", "Bb11#5", "Bbaug9", "Bb9+", "Bb+9", "Bb+9M7", "Bb+M7", "Bbm(add9)", "Bb(add9)", "Bb(addb9)", "Bb(add#9)", "Bb69", "Bbm69", "Bbm(b5)", "Bbm7(b9)", "Bbm7(#9)", "Bb9+5", "Bbm+5", "Bbm+", "BbM6", "Bbm7-5", "Bbm7(omit5)", "Bb+", "Bb+7", "Bb+7#9", "Bb+7b9", "Bb7(omit3)", "Bb(#5)", "Bb7#5b9", "Bb7-9", "Bb7+9", "Bbmaj7", "BbM7-5", "BbM7+5", "BbM7(add13)", "Bb7alt", "Bb7sus4", "Bb13sus4", "Bb7+", "Bb7#5", "Bb7+5", "Bb7-5", "Bbsus", "Bbmaj9", "Bbmaj13", "Bbm(maj7)", "Bbm+7", "Bbmin(maj7)", "Bbmin#7", "Bbm#7", "Bbmsus", "Bbm7sus", "Bbdim", "Bb\u00b0", "Bb\u00b03", "Bb\u00b0(addM7)", "Bb\u00f8", "Bb9sus", "Bb9-5", "Bbdim3", "Bbomit3(add9)", "Bb9sus4", "Bb7b9sus"], "B": ["BM", "B(b5)", "Badd9", "Baddb9", "Badd#9", "Bm", "Bmb5", "Bm#5", "Bm6", "Bm6(add9)", "Bm7", "Bm7#5", "BmM7", "Bm+7b9", "Bm+7#9", "BmM7(add9)", "Bm7b5", "Bm7b9", "Bm7#9", "Bmb9", "B7", "B7(6)", "B7b5", "Bdim7", "Bdim7(addM7)", "Bdim(b13)", "Baug", "B6", "B6(add9)", "BM7", "BM7#5", "BM7b5", "B9", "B9b5", "Bm9", "Bm7b5b9", "Bm9b5", "Bm(sus9)", "BM9", "BM9#11", "B7b9", "B7#9", "B7#9b13", "B7b5(add13)", "B7(add13)", "B7b5b9", "B7b5#9", "B7#5#9", "Baug7", "Baug7b9", "Baug7#9", "Baug9M7", "B+7b9#11", "Bm+7b9#11", "B11", "B11+", "Bm11", "BM11", "Bm7(add11)", "Bm9#11", "Bm7b9#11", "Bm7(add13)", "B11b9", "B9#5", "B9b6", "B9#11", "B7#9#11", "B7b9#11", "B7#11", "BM7#11", "Bm11b5", "Bsus4", "Bmsus4", "Bm7sus4", "Bsus(addb9)", "Bsus(add9)", "Bsus(add#9)", "B7sus", "B7susb9", "Bsus2", "B7sus2", "Bsus9", "B13sus", "B13susb9", "B13", "B7b13", "B13b5", "B13#9", "B13b9", "BM#11", "BM13", "Bm13", "B13#11", "BM13#11", "B5", "Bomit3add9", "B7omit3", "Bm7omit5", "B11#5", "Baug9", "B9+", "B+9", "B+9M7", "B+M7", "Bm(add9)", "B(add9)", "B(addb9)", "B(add#9)", "B69", "Bm69", "Bm(b5)", "Bm7(b9)", "Bm7(#9)", "B9+5", "Bm+5", "Bm+", "BM6", "Bm7-5", "Bm7(omit5)", "B+", "B+7", "B+7#9", "B+7b9", "B7(omit3)", "B(#5)", "B7#5b9", "B7-9", "B7+9", "Bmaj7", "BM7-5", "BM7+5", "BM7(add13)", "B7alt", "B7sus4", "B13sus4", "B7+", "B7#5", "B7+5", "B7-5", "Bsus", "Bmaj9", "Bmaj13", "Bm(maj7)", "Bm+7", "Bmin(maj7)", "Bmin#7", "Bm#7", "Bmsus", "Bm7sus", "Bdim", "B\u00b0", "B\u00b03", "B\u00b0(addM7)", "B\u00f8", "B9sus", "B9-5", "Bdim3", "Bomit3(add9)", "B9sus4", "B7b9sus"], "B#": ["B#M", "B#(b5)", "B#add9", "B#addb9", "B#add#9", "B#m", "B#mb5", "B#m#5", "B#m6", "B#m6(add9)", "B#m7", "B#m7#5", "B#mM7", "B#m+7b9", "B#m+7#9", "B#mM7(add9)", "B#m7b5", "B#m7b9", "B#m7#9", "B#mb9", "B#7", "B#7(6)", "B#7b5", "B#dim7", "B#dim7(addM7)", "B#dim(b13)", "B#aug", "B#6", "B#6(add9)", "B#M7", "B#M7#5", "B#M7b5", "B#9", "B#9b5", "B#m9", "B#m7b5b9", "B#m9b5", "B#m(sus9)", "B#M9", "B#M9#11", "B#7b9", "B#7#9", "B#7#9b13", "B#7b5(add13)", "B#7(add13)", "B#7b5b9", "B#7b5#9", "B#7#5#9", "B#aug7", "B#aug7b9", "B#aug7#9", "B#aug9M7", "B#+7b9#11", "B#m+7b9#11", "B#11", "B#11+", "B#m11", "B#M11", "B#m7(add11)", "B#m9#11", "B#m7b9#11", "B#m7(add13)", "B#11b9", "B#9#5", "B#9b6", "B#9#11", "B#7#9#11", "B#7b9#11", "B#7#11", "B#M7#11", "B#m11b5", "B#sus4", "B#msus4", "B#m7sus4", "B#sus(addb9)", "B#sus(add9)", "B#sus(add#9)", "B#7sus", "B#7susb9", "B#sus2", "B#7sus2", "B#sus9", "B#13sus", "B#13susb9", "B#13", "B#7b13", "B#13b5", "B#13#9", "B#13b9", "B#M#11", "B#M13", "B#m13", "B#13#11", "B#M13#11", "B#5", "B#omit3add9", "B#7omit3", "B#m7omit5", "B#11#5", "B#aug9", "B#9+", "B#+9", "B#+9M7", "B#+M7", "B#m(add9)", "B#(add9)", "B#(addb9)", "B#(add#9)", "B#69", "B#m69", "B#m(b5)", "B#m7(b9)", "B#m7(#9)", "B#9+5", "B#m+5", "B#m+", "B#M6", "B#m7-5", "B#m7(omit5)", "B#+", "B#+7", "B#+7#9", "B#+7b9", "B#7(omit3)", "B#(#5)", "B#7#5b9", "B#7-9", "B#7+9", "B#maj7", "B#M7-5", "B#M7+5", "B#M7(add13)", "B#7alt", "B#7sus4", "B#13sus4", "B#7+", "B#7#5", "B#7+5", "B#7-5", "B#sus", "B#maj9", "B#maj13", "B#m(maj7)", "B#m+7", "B#min(maj7)", "B#min#7", "B#m#7", "B#msus", "B#m7sus", "B#dim", "B#\u00b0", "B#\u00b03", "B#\u00b0(addM7)", "B#\u00f8", "B#9sus", "B#9-5", "B#dim3", "B#omit3(add9)", "B#9sus4", "B#7b9sus"], "Cb": ["CbM", "Cb(b5)", "Cbadd9", "Cbaddb9", "Cbadd#9", "Cbm", "Cbmb5", "Cbm#5", "Cbm6", "Cbm6(add9)", "Cbm7", "Cbm7#5", "CbmM7", "Cbm+7b9", "Cbm+7#9", "CbmM7(add9)", "Cbm7b5", "Cbm7b9", "Cbm7#9", "Cbmb9", "Cb7", "Cb7(6)", "Cb7b5", "Cbdim7", "Cbdim7(addM7)", "Cbdim(b13)", "Cbaug", "Cb6", "Cb6(add9)", "CbM7", "CbM7#5", "CbM7b5", "Cb9", "Cb9b5", "Cbm9", "Cbm7b5b9", "Cbm9b5", "Cbm(sus9)", "CbM9", "CbM9#11", "Cb7b9", "Cb7#9", "Cb7#9b13", "Cb7b5(add13)", "Cb7(add13)", "Cb7b5b9", "Cb7b5#9", "Cb7#5#9", "Cbaug7", "Cbaug7b9", "Cbaug7#9", "Cbaug9M7", "Cb+7b9#11", "Cbm+7b9#11", "Cb11", "Cb11+", "Cbm11", "CbM11", "Cbm7(add11)", "Cbm9#11", "Cbm7b9#11", "Cbm7(add13)", "Cb11b9", "Cb9#5", "Cb9b6", "Cb9#11", "Cb7#9#11", "Cb7b9#11", "Cb7#11", "CbM7#11", "Cbm11b5", "Cbsus4", "Cbmsus4", "Cbm7sus4", "Cbsus(addb9)", "Cbsus(add9)", "Cbsus(add#9)", "Cb7sus", "Cb7susb9", "Cbsus2", "Cb7sus2", "Cbsus9", "Cb13sus", "Cb13susb9", "Cb13", "Cb7b13", "Cb13b5", "Cb13#9", "Cb13b9", "CbM#11", "CbM13", "Cbm13", "Cb13#11", "CbM13#11", "Cb5", "Cbomit3add9", "Cb7omit3", "Cbm7omit5", "Cb11#5", "Cbaug9", "Cb9+", "Cb+9", "Cb+9M7", "Cb+M7", "Cbm(add9)", "Cb(add9)", "Cb(addb9)", "Cb(add#9)", "Cb69", "Cbm69", "Cbm(b5)", "Cbm7(b9)", "Cbm7(#9)", "Cb9+5", "Cbm+5", "Cbm+", "CbM6", "Cbm7-5", "Cbm7(omit5)", "Cb+", "Cb+7", "Cb+7#9", "Cb+7b9", "Cb7(omit3)", "Cb(#5)", "Cb7#5b9", "Cb7-9", "Cb7+9", "Cbmaj7", "CbM7-5", "CbM7+5", "CbM7(add13)", "Cb7alt", "Cb7sus4", "Cb13sus4", "Cb7+", "Cb7#5", "Cb7+5", "Cb7-5", "Cbsus", "Cbmaj9", "Cbmaj13", "Cbm(maj7)", "Cbm+7", "Cbmin(maj7)", "Cbmin#7", "Cbm#7", "Cbmsus", "Cbm7sus", "Cbdim", "Cb\u00b0", "Cb\u00b03", "Cb\u00b0(addM7)", "Cb\u00f8", "Cb9sus", "Cb9-5", "Cbdim3", "Cbomit3(add9)", "Cb9sus4", "Cb7b9sus"]}