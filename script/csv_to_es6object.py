import csv
import json

csvfile = open('../data/words.csv', 'r')
vuefile = open('words.vue', 'w')

fields = ("langId", "categoryId", "word", "meaning", "ruby", "pos")
reader = csv.DictReader(csvfile, fields)

vuefile.write('[')
reader.next() # skip the header
for row in reader:
  json.dump(row, vuefile, ensure_ascii=False)
  vuefile.write('\n')
vuefile.write(']')
