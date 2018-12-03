/*
--- Day 2: Inventory Management System ---
You stop falling through time, catch your breath, and check the screen on the device. "Destination reached. Current Year: 1518. Current Location: North Pole Utility Closet 83N10." You made it! Now, to find those anomalies.

Outside the utility closet, you hear footsteps and a voice. "...I'm not sure either. But now that so many people have chimneys, maybe he could sneak in that way?" Another voice responds, "Actually, we've been working on a new kind of suit that would let him fit through tight spaces like that. But, I heard that a few days ago, they lost the prototype fabric, the design plans, everything! Nobody on the team can even seem to remember important details of the project!"

"Wouldn't they have had enough fabric to fill several boxes in the warehouse? They'd be stored together, so the box IDs should be similar. Too bad it would take forever to search the warehouse for two similar box IDs..." They walk too far away to hear any more.

Late at night, you sneak to the warehouse - who knows what kinds of paradoxes you could cause if you were discovered - and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates (your puzzle input).

To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

For example, if you see the following box IDs:

abcdef contains no letters that appear exactly two or three times. 0,0
bababc contains two a and three b, so it counts for both. 1,1
abbcde contains two b, but no letter appears exactly three times.  2,1
abcccd contains three c, but no letter appears exactly two times. 2,2
aabcdd contains two a and two d, but it only counts once. 3,2
abcdee contains two e. 4,2
ababab contains three a and three b, but it only counts once. 4,3

Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.

What is the checksum for your list of box IDs?
*/

const boxIDs = [ 'luojygedpvsthptkxiwnaorzmq', 'lucjqgedppsbhftkxiwnaorlmq', 'lucjmgefpvsbhftkxiwnaorziq', 'lucjvgedpvsbxftkxiwpaorzmq', 'lrcjygedjvmbhftkxiwnaorzmq', 'lucjygedpvsbhftkxiwnootzmu', 'eucjygedpvsbhftbxiwnaorzfq', 'lulnygedpvsbhftkxrwnaorzmq', 'lucsygedpvsohftkxqwnaorzmq', 'lucjyaedpvsnhftkxiwnaorzyq', 'lunjygedpvsohftkxiwnaorzmb', 'lucjxgedpvsbhrtkxiwnamrzmq', 'lucjygevpvsbhftkxcwnaorzma', 'lucjbgedpvsbhftrxiwnaoazmq', 'llcjygkdpvhbhftkxiwnaorzmq', 'lmcjygxdpvsbhftkxswnaorzmq', 'lucpygedpvsbhftkxiwraorzmc', 'lucjbgrdpvsblftkxiwnaorzmq', 'lucjfgedpvsbhftkxiwnaurzmv', 'lucjygenpvsbhytkxiwnaorgmq', 'luqjyredsvsbhftkxiwnaorzmq', 'lucjygedpvavhftkxiwnaorumq', 'gucjygedpvsbhkxkxiwnaorzmq', 'lucjygedpvsbhftkxlwnaordcq', 'lucjygedpvibhfqkxiwnaorzmm', 'lucjegedpvsbaftkxewnaorzmq', 'kucjygeqpvsbhfokxiwnaorzmq', 'lugjygedwvsbhftkxiwnatrzmq', 'lucjygedqvsbhftdxiwnayrzmq', 'lucjygekpvsbuftkxiwnaqrzmq', 'lucjygedpvsbhfbkxiwnaoozdq', 'lscjygedpvzchftkxiwnaorzmq', 'luckygedpvsbxftkxiwnaorvmq', 'luyjygedgvsbhptkxiwnaorzmq', 'lmcjygedpvsbhfckxiwnaodzmq', 'lucmygedwvybhftkxiwnaorzmq', 'lgcjhgedavsbhftkxiwnaorzmq', 'lucjugedpvsbhftkxiwmaoozmq', 'lucjygedpvybhftkxkwnaorumq', 'lucjygedpvzbhfakxiwnaorzpq', 'lucjygedpvsbhftyxzwnajrzmq', 'lucjygedpvsdhfakxiwnoorzmq', 'luyjygeopvhbhftkxiwnaorzmq', 'lucjygadpvsbhntkxiwnaorzmx', 'lucjygedzvsbhftkiiwuaorzmq', 'sucjygodpvsbhftkxiwuaorzmq', 'euijygydpvsbhftkxiwnaorzmq', 'lucjlgeduvsbhftkxicnaorzmq', 'lucjdgedpvsbhfgkxiwnhorzmq', 'lucjymedpvsbhotkxiqnaorzmq', 'lucjygmdpvsbhftkxywnairzmq', 'lucjggedpvsbhfxkxiqnaorzmq', 'sucjygedpvsbhftkxiwnaorjmv', 'lucjlgedpvsbhftkxiwnairzmg', 'lucjygedppubhftkxijnaorzmq', 'lucjyxedpvsvhftkxlwnaorzmq', 'lucjygedpvxbhftkfiwyaorzmq', 'lucjygedposbhftkniwnaorzmw', 'lucjygewpvsbhftgxiwnavrzmq', 'lucjynedpvsbmftkaiwnaorzmq', 'lucjyhedpvzbhftkxiwncorzmq', 'lucjygedpvsbhfikpiwnaoezmq', 'lupjypedpvsbhftkjiwnaorzmq', 'lucjygudpvsbhfwkxivnaorzmq', 'lucjygrdpvsbhatkxzwnaorzmq', 'lucjbgmdpvsbhftkxihnaorzmq', 'lucjmgedpvpbhftkxiwnaorcmq', 'lucjygedpvskhfukmiwnaorzmq', 'lucjygedgvsbhftkxiwnvprzmq', 'lucjzgedppsbhytkxiwnaorzmq', 'lfcjypedpvsbhftrxiwnaorzmq', 'lucjyqldphsbhftkxiwnaorzmq', 'lucjygedpvsbhftzxewnaorzqq', 'lucjygeapvsbhftkxiinoorzmq', 'lucjygedpvszhftguiwnaorzmq', 'luojygedpvsbhftkxawnaornmq', 'lucjygedpcsboetkxiwnaorzmq', 'lufjygedpvfbhftaxiwnaorzmq', 'luciygedpvsbhftkxhwaaorzmq', 'lucjygedpvnbhftkaiwnaorzmc', 'lucjygedpvsbhftkxiwcaorbdq', 'lucjygelpvsbhftaxiwsaorzmq', 'lujjygedpssbhftkxiwnaorzmr', 'ludjygedpvsbhftkxiynaorzmj', 'lukjygeedvsbhftkxiwnaorzmq', 'lucjqpedpvsbhftkxiwnaozzmq', 'jucjygedpvsbhftkxgwnaorqmq', 'llwjygedpvsbhetkxiwnaorzmq', 'rucjygedpvsbhftkxiwndorymq', 'lucjygedpvsbhftvxswnaorwmq', 'lucjygerpvsbhfykxiwnaormmq', 'lucjynedpvsbhftkxijnaorziq', 'ljcjygedpvrbhftkeiwnaorzmq', 'lucjygedpnsbhftkxiwhaornmq', 'lucjygadpvsbhftkxibnaorzqq', 'lucjqgedpvsihftkxiwnaorzdq', 'lucjygedpvsqhfttjiwnaorzmq', 'llcjygedsvsbhftkxiwwaorzmq', 'lfckygedpvsbhftkxiunaorzmq', 'lucjyeedpdsbhftkxiwnaotzmq', 'lucjygedpvsbhftkoiwnaoqzcq', 'huwjvgedpvsbhftkxiwnaorzmq', 'lucjygldpvsbdhtkxiwnaorzmq', 'lycxygedpvsbhftmxiwnaorzmq', 'lucjygedpvsbhftyxianvorzmq', 'lucuygedpdsbhqtkxiwnaorzmq', 'lucjyggdpvsbhftkxiwnavremq', 'lucjyggdpvsbkftkxiwnaorbmq', 'luchyqedpvsbhftixiwnaorzmq', 'lpcnygedpvsbhftkxzwnaorzmq', 'lucjygedpvsihftkxiwfaortmq', 'lucjygvdpvsbhgtkxiwnamrzmq', 'lucjygodpvrbhqtkxiwnaorzmq', 'lucjygedpfsbhftkxipnaorzma', 'lucjygedpvsbhftkxpcjaorzmq', 'lucjygodbmsbhftkxiwnaorzmq', 'lucjygedpvsbhftkxipnaogzmb', 'luxjygjdpvsbhltkxiwnaorzmq', 'lucxygedpvsbhftkxzwnaorjmq', 'luajygedpvsbhftzxiwaaorzmq', 'lhcjygedpvsqhftfxiwnaorzmq', 'lucjygecphsbhftkxiwnaprzmq', 'lucjygedpvsbhptkxifnaorqmq', 'lucjygedpvichftkpiwnaorzmq', 'lucjygedpcsbhstkxswnaorzmq', 'kucjygedpvsbhftkxiwbyorzmq', 'lfpjxgedpvsbhftkxiwnaorzmq', 'lucjytldpvsbhftkxiwdaorzmq', 'lufjygedpvfbhftbxiwnaorzmq', 'lucjygebpvgbhftkxipnaorzmq', 'luujygedpvdbhftkxiwnaorzmd', 'lucjygedpvsbhfbyxwwnaorzmq', 'lucjygedpvsbhftkxiwnaoqpmw', 'qucgygedpvsbhftkxiwnaortmq', 'ludjtgedpvsbhftkxiunaorzmq', 'lucjyiedovsbhftkxiwjaorzmq', 'lucjygedpysbjftoxiwnaorzmq', 'lumjygedpvsbuftkxiknaorzmq', 'lucjygedpvsbhfokxgonaorzmq', 'lucjygeqpvsbhftkfiwnaorzeq', 'lucjygedpvskhftkxiwntorkmq', 'luujygedpvsbhftkxiwraorzmt', 'lucwygedpvsbjftkxiwnaorzmj', 'jucjyfedcvsbhftkxiwnaorzmq', 'luujygedpnsehftkxiwnaorzmq', 'lucjygedpvszhfckxiwnaorzmi', 'lucjyredpvsbzftkpiwnaorzmq', 'lucjygedpvsbwfgkxiwnaorzoq', 'lucjygedpvgbhftkpiwnaorzms', 'lucjygedpvjbhftkxzwnaoizmq', 'vucjycedpvsbhftkxiwfaorzmq', 'luawygeapvsbhftkxiwnaorzmq', 'lucjygetpvsbhftkxiwnaafzmq', 'lucjvgedpvsbhftkxywnavrzmq', 'luolygedpvsbgftkxiwnaorzmq', 'likjygedpvsbhftkxiwnabrzmq', 'lucjygedovsbhftkxirpaorzmq', 'lucjygedphsshftkxqwnaorzmq', 'uuqjygewpvsbhftkxiwnaorzmq', 'lucjygedcvsbhftkxiwoarrzmq', 'lucnygedpvsbhfakxiwnaorzms', 'lucjygedpvsbhntkxiwnawrzmb', 'lucjygedpvsblfxkxivnaorzmq', 'lucjygedpvsghftkxiwnaawzmq', 'yucjygedpgsbhftkxiwnaorzbq', 'lucjyweapvsbhftkxiwnaoezmq', 'lucjygevpvsbyftcxiwnaorzmq', 'luejygedovsbhftkxiwnqorzmq', 'lucjyqedpvsbhfbkxiwnaorzms', 'lucjypedpvsbhftwxiwnhorzmq', 'lucjygedpvsbhmtkviwxaorzmq', 'lucjogedpvpbhftkxiwnaorqmq', 'lucjygedpvsbhztkxkwnaoazmq', 'lucjyaedpvsbcftkxiwnaorzhq', 'lucjygbdpvkbhftkxiznaorzmq', 'lucpygedpvzbhftkxfwnaorzmq', 'lucjmgedpcsbhftkxiwnaoezmq', 'lucjygedyvsbbftkxiwnnorzmq', 'lucjyyedpvsbhftuxiwnaonzmq', 'lucjygfdpvsbhutkxiwnaorzmt', 'uccjygedpvschftkxiwnaorzmq', 'lusjygedpvbbhqtkxiwnaorzmq', 'ducuygedpvsbhftkxiwnaorzyq', 'lucjygkdvwsbhftkxiwnaorzmq', 'cucjyyedpvsbhftkxiwnaerzmq', 'lucjygedavsbhftkxiwnkorzbq', 'lucjygedmvsyhftkxiwiaorzmq', 'lucjygeipvsbhfpkxiwnaorzpq', 'vucjugedvvsbhftkxiwnaorzmq', 'lucjyzedpvsbhftkxpwnaoozmq', 'lucjygedpvgbhftkxiwtaorzqq', 'lecjygedpvcwhftkxiwnaorzmq', 'lucjyghdpvsbhfcyxiwnaorzmq', 'lucjygedpvesqftkxiwnaorzmq', 'lucjyjehpvsbhftbxiwnaorzmq', 'lucjygedpvtbhdtkxignaorzmq', 'lucjygxdpgsbhftkxivnaorzmq', 'lucjygvdpvsbhftkpiwnaorzqq', 'lucjysedpvsbhftkxiwnalrzmc', 'lucjygedpvkbhjtkxiwnaorsmq', 'lucjygedpvsbvfgkxiwnaerzmq', 'lucjygedpvsihftkxilnaorzmu', 'lvcvygndpvsbhftkxiwnaorzmq', 'lucjysedpqsbhftkxiwnaordmq', 'lucsygeypvsbhftkwiwnaorzmq', 'lucjygewpotbhftkxiwnaorzmq', 'lucjysedpvsbhftkxiwnanrzmv', 'lucjygedpvsbhutkxiwnaoplmq', 'wucjygedpvsqbftkxiwnaorzmq', 'lacjygeepvsbhftkxiwnjorzmq', 'lucjygedpusyhftkxicnaorzmq', 'qucjyredpvsbhftkxiwnworzmq', 'lucjygedevsbhftkgiwnayrzmq', 'lucjygedpksbrftkliwnaorzmq', 'lucjygedpvsbhfgkxisnaorzeq', 'lucjygedpvhdhftkeiwnaorzmq', 'lucjsgedpvsboftkxiwnaorumq', 'luctygedpvsbhftouiwnaorzmq', 'lucjygedpvsjhfukjiwnaorzmq', 'lucjagrepvsbhftkxiwnaorzmq', 'lucjkgerpvsbhftkxiwnairzmq', 'turjygedpvsbnftkxiwnaorzmq', 'lbcjygedpvsbhftkdpwnaorzmq', 'lucpygedpvsbhftkxnwnoorzmq', 'jucjygedpvsbhbtkxicnaorzmq', 'lecjygedpvsbhftkriwnaogzmq', 'licjyvcdpvsbhftkxiwnaorzmq', 'lrcjygewpnsbhftkxiwnaorzmq', 'ltcxygedpvlbhftkxiwnaorzmq', 'luctygedpvhbhztkxiwnaorzmq', 'lucwygedplsbhfakxiwnaorzmq', 'lucjygedpnsbhftkxiwjaoezmq', 'lucpygedptsbhftkxiwnaorzmo', 'lucjygedpvibhqtkxiknaorzmq', 'lucjwgqdpvrbhftkxiwnaorzmq', 'lucjmgkdpvsbhftkxiwraorzmq', 'lucjygwupvsbhftkxiznaorzmq', 'lucjhgedpvobhftkxiwncorzmq', 'lucjygedpvsbhftkxiwnaohtmj', 'lucjygedpvsbeftkfiwnaorzyq', 'lucjygcdpvsbpftkhiwnaorzmq', 'lucjygedpmsbhftkxiwnkouzmq', 'oucjygedpvsbyftkximnaorzmq', 'lucjcgedpvsbhftkxywnforzmq', 'lfcjygedfvsbdftkxiwnaorzmq', 'ducjygedevsbhfttxiwnaorzmq', 'ldcjdgedpvsbhftkxiwnavrzmq', 'lucjymedmvsbhqtkxiwnaorzmq', 'lucjygedpvabhftkxiwnasrlmq', 'lucjygefpvsbhftkxmwnaorkmq'];

const boxIDChecksum = (boxIDs) => {
  let doubleLetterIDs = 0;
  let trippleLetterIDs = 0;

  boxIDs.forEach((boxID) => {
    let doubleLetters = 0;
    let trippleLetters = 0;
    const timesSeen = {};

    for(let char of boxID){
      const charCount = timesSeen[char] ? timesSeen[char]+1 : 1;
      if(charCount === 2){
        doubleLetters++;
      } else if(charCount === 3){
        doubleLetters--;
        trippleLetters++;
      } else if(charCount === 4){
        trippleLetters--;
      }
      timesSeen[char] = charCount;
    }
    if(doubleLetters) doubleLetterIDs++;
    if(trippleLetters) trippleLetterIDs++;
  })

  return doubleLetterIDs * trippleLetterIDs;
}

/*

Your puzzle answer was 4712.

The first half of this puzzle is complete! It provides one gold star: *

--- Part Two ---
Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz

The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)
*/

const findNearlyIdenticalIDs = (boxIDs) => {
  const sortedIDs = boxIDs.sort();
  let commonLetters;

  for(let i = 1; i < sortedIDs.length; i++){
    if(commonLetters) break;

    const boxA = sortedIDs[i-1].split('');
    const boxB = sortedIDs[i].split('');

    for(let l = 0; l < boxA.length; l++){
      if(boxA[l] !== boxB[l]){
        boxA.splice(l, 1);
        boxB.splice(l, 1);
        if(boxA.join('') === boxB.join('')){
          commonLetters = boxA.join('');
        }
        break;
      }
    }
  }
  return commonLetters;
}

/*

"lufjygedpvfbhftxiwnaorzmq"

That's the right answer! You are one gold star closer to fixing the time stream. *

You have completed Day 2!
*/