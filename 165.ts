const revision1s: string[] = version1.split('.');
const revision2s: string[] = version2.split('.');

let n: number = Math.min(revision1s.length, revision2s.length);

for (let i = 0; i < n; i++) {
    if (parseInt(revision1s[i]) !== parseInt(revision2s[i])) {
        return parseInt(revision1s[i]) > parseInt(revision2s[i]) ? 1 : -1;
    }
}

if (revision1s.length > n) {
    while(n !== revision1s.length ) {
        if (parseInt(revision1s[n]) > 0) {
            return 1;
        }
        n+=1;
    }
    return 0;
}

while(n !== revision2s.length ) {
    if (parseInt(revision2s[n]) > 0) {
        return -1;
    }
    n+=1;
}
return 0;