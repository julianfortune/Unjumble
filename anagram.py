file = open('/Users/julianfortune/Desktop/enable1.txt')

wordDictionary = {}

for line in file:
    word = line.strip()
    wordLength = len(word)
    wordHash = "".join(sorted(word))

    if wordLength not in wordDictionary:
        wordDictionary[wordLength] = {}

    if wordHash not in wordDictionary[wordLength]:
        wordDictionary[wordLength][wordHash] = []

    wordDictionary[wordLength][wordHash].append(word)

unscramble = input("enter a word:")
wordLength = len(unscramble)
wordHash = "".join(sorted(unscramble))

if wordLength in wordDictionary and wordHash in wordDictionary[wordLength]:
    print(wordDictionary[wordLength][wordHash])