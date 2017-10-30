/**
 * @package   aez.wasm
 * @author    Nazar Mokrynskyi <nazar@mokrynskyi.com>
 * @copyright Copyright (c) 2017, Nazar Mokrynskyi
 * @license   MIT License, see license.txt
 */
lib	= require('../aez')()

module.exports = {ready : lib.then, encrypt, decrypt}

allocate	= lib.allocateBytes

/**
 * @param {!Uint8Array}	plaintext				Arbitrary size plaintext
 * @param {!Uint8Array}	ad						Arbitrary size associated data
 * @param {!Uint8Array}	nonce					Arbitrary size nonce
 * @param {!Uint8Array}	key						Arbitrary size nonce
 * @param {number}		ciphertext_expansion	How much longer ciphertext must be comparing to plaintext (read AEZ paper for details)
 *
 * @return {!Uint8Array} Ciphertext
 */
function encrypt (plaintext, ad, nonce, key, ciphertext_expansion)
	ciphertext	= allocate(plaintext.length + ciphertext_expansion)
	plaintext	= allocate(0, plaintext)
	ad			= allocate(0, ad)
	nonce		= allocate(0, nonce)
	key			= allocate(0, key)
	lib._aez_encrypt(
		ciphertext,
		plaintext, plaintext.length,
		ad, ad.length,
		nonce, nonce.length,
		key, key.length,
		ciphertext_expansion
	)
	ciphertext	= ciphertext.get()
	lib.freeBytes()
	ciphertext

/**
 * @param {!Uint8Array}	ciphertext				Ciphertext
 * @param {!Uint8Array}	ad						Arbitrary size associated data
 * @param {!Uint8Array}	nonce					Arbitrary size nonce
 * @param {!Uint8Array}	key						Arbitrary size nonce
 * @param {number}		ciphertext_expansion	How much shorter plaintext must be comparing to ciphertext (read AEZ paper for details)
 *
 * @return {!Uint8Array} Plaintext
 *
 * @throws {Error}
 */
function decrypt (ciphertext, ad, nonce, key, ciphertext_expansion)
	plaintext	= allocate(ciphertext.length - ciphertext_expansion)
	ciphertext	= allocate(0, ciphertext)
	ad			= allocate(0, ad)
	nonce		= allocate(0, nonce)
	key			= allocate(0, key)
	result		= lib._aez_decrypt(
		plaintext,
		ciphertext, ciphertext.length,
		ad, ad.length,
		nonce, nonce.length,
		key, key.length,
		ciphertext_expansion
	)
	if result != 0
		lib.freeBytes()
		throw new Error('Decryption failed')
	plaintext	= plaintext.get()
	lib.freeBytes()
	plaintext
