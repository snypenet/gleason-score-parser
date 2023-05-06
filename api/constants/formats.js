const gleasonFormats = [
    'Gleason score 2=3+4, 2=score,3=primary,4=secondary',
    '2=1+2, 2=score,1=primary,2=secondary',
    '4+4, 8=score,4=primary,4=secondary',
    'Gleason score 6, 6=score,primary=unknown,secondary=unknown',
    '4+5=9, 9=score,4=primary,5=secondary',
    '4(3+1), 4=score,3=primary,1=secondary',
    '5=(2+3), 5=score,2=primary,3=secondary',
    '<hpiNotes><name>Gleason</name><text>9</text></hpiNotes>, 9=score,primary=unknown,secondary=unknown',
    '<hpiNotes><name>Gleason</name><text>9(7+2)</text></hpiNotes>, 9=score,primary=7,secondary=2',
    '<hpiNotes><name>Gleason</name><text>9=8+1</text></hpiNotes>, 9=score,primary=8,secondary=1',
    '<hpiNotes><name>Gleason</name><text>3+7</text></hpiNotes>, 10=score,primary=3,secondary=7'
];

module.exports = {
    gleasonFormats
}