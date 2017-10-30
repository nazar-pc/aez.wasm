// Generated by LiveScript 1.5.0
/**
 * @package   aez.wasm
 * @author    Nazar Mokrynskyi <nazar@mokrynskyi.com>
 * @copyright Copyright (c) 2017, Nazar Mokrynskyi
 * @license   MIT License, see license.txt
 */
(function(){
  var lib, encrypt, decrypt, randombytes, test;
  lib = require('..');
  encrypt = lib.encrypt, decrypt = lib.decrypt;
  randombytes = require('crypto').randomBytes;
  test = require('tape');
  lib.ready(function(){
    test('Basic usage', function(t){
      var plaintext, ad, nonce, key, ciphertext_expansion, ciphertext, plaintext_decrypted;
      plaintext = randombytes(16);
      ad = randombytes(32);
      nonce = randombytes(12);
      key = randombytes(48);
      ciphertext_expansion = 16;
      ciphertext = encrypt(plaintext, ad, nonce, key, ciphertext_expansion);
      plaintext_decrypted = decrypt(ciphertext, ad, nonce, key, ciphertext_expansion);
      t.equal(plaintext_decrypted.join(''), plaintext.join(''), 'Decrypted correctly');
      t.end();
    });
  });
}).call(this);
