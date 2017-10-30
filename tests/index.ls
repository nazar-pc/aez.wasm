/**
 * @package   aez.wasm
 * @author    Nazar Mokrynskyi <nazar@mokrynskyi.com>
 * @copyright Copyright (c) 2017, Nazar Mokrynskyi
 * @license   MIT License, see license.txt
 */
lib					= require('..')
{encrypt, decrypt}	= lib
test				= require('tape')

<-! lib.ready
test('Basic usage', (t) !->
	t.plan(4)

	plaintext				= Buffer.from('37c8f1a1c981c04263769feb059be120', 'hex')
	ad						= Buffer.from('38e7de89bfabf8b4064118449633e2adb942c22b63c9c0971d19d6845dedd9a0', 'hex')
	nonce					= Buffer.from('54d3b0f09e55592d449c5117', 'hex')
	key						= Buffer.from('ead50aed64ee3bd8925b7fbbbe619cdf803cbcf386fccce48ea6b921c36efdb821e47fe3fbdf1a0a90e36d29467797ea', 'hex')
	ciphertext_expansion	= 16
	known_ciphertext		= Buffer.from('e2c59b7c345587ab28af6876b494d4de7a60eba31da20fd44c6e7b6084193efa', 'hex')

	ciphertext				= encrypt(plaintext, ad, nonce, key, ciphertext_expansion)
	t.equal(known_ciphertext.join(','), ciphertext.join(','), 'Encrypted correctly')

	var plaintext_decrypted
	t.doesNotThrow (!->
		plaintext_decrypted	:= decrypt(ciphertext, ad, nonce, key, ciphertext_expansion)
	), 'Decrypted successfully'

	t.equal(plaintext_decrypted.join(','), plaintext.join(','), 'Decrypted correctly')

	t.throws (!->
		decrypt(ciphertext, Uint8Array.of(1, 2, 3), nonce, key, ciphertext_expansion)
	), Error, 'Decryption fails as expected'
)
