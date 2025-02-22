import {Attribute} from 'event'
import {ensureActions} from '../type'

// tslint:disable:no-magic-numbers

export const RDM = ensureActions({
	// -----
	// Cooldowns
	// -----
	EMBOLDEN: {
		id: 7520,
		name: 'Embolden',
		icon: 'https://xivapi.com/i/003000/003218.png',
		cooldown: 120000,
		statusesApplied: ['EMBOLDEN_SELF', 'EMBOLDEN_PARTY'],
	},
	ACCELERATION: {
		id: 7518,
		name: 'Acceleration',
		icon: 'https://xivapi.com/i/003000/003214.png',
		cooldown: 55000,
		statusesApplied: ['ACCELERATION'],
		charges: 2,
	},
	MANAFICATION: {
		id: 7521,
		name: 'Manafication',
		icon: 'https://xivapi.com/i/003000/003219.png',
		cooldown: 110000,
		breaksCombo: true,
		statusesApplied: ['MANAFICATION'],
	},
	CONTRE_SIXTE: {
		id: 7519,
		name: 'Contre Sixte',
		icon: 'https://xivapi.com/i/003000/003217.png',
		cooldown: 35000,
		potency: 360,
	},
	DISPLACEMENT: {
		id: 7515,
		name: 'Displacement',
		icon: 'https://xivapi.com/i/003000/003211.png',
		cooldown: 35000,
		potency: 180,
		cooldownGroup: 10,
		charges: 2,
	},
	ENGAGEMENT: {
		id: 16527,
		name: 'Engagement',
		icon: 'https://xivapi.com/i/003000/003231.png',
		cooldown: 35000,
		potency: 180,
		cooldownGroup: 10,
		charges: 2,
	},
	CORPS_A_CORPS: {
		id: 7506,
		name: 'Corps-a-corps',
		icon: 'https://xivapi.com/i/003000/003204.png',
		cooldown: 35000,
		potency: 130,
		charges: 2,
	},
	FLECHE: {
		id: 7517,
		name: 'Fleche',
		icon: 'https://xivapi.com/i/003000/003212.png',
		cooldown: 25000,
		potency: 460,
	},

	// -----
	// Actions
	// -----
	RIPOSTE: {
		id: 7504,
		name: 'Riposte',
		icon: 'https://xivapi.com/i/003000/003201.png',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		cooldown: 2500,
		potency: 130,
		combo: {
			start: true,
		},
	},
	ENCHANTED_RIPOSTE: {
		id: 7527,
		name: 'Enchanted Riposte',
		icon: 'https://xivapi.com/i/003000/003225.png',
		onGcd: true,
		cooldown: 1500,
		potency: 220, // consumes 20 white, 20 black
		combo: {
			start: true,
		},
	},
	ZWERCHHAU: {
		id: 7512,
		name: 'Zwerchhau',
		icon: 'https://xivapi.com/i/003000/003210.png',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		cooldown: 2500,
		potency: 100,
		combo: {
			from: 7504,
			potency: 150,
		},
	},
	ENCHANTED_ZWERCHHAU: {
		id: 7528,
		name: 'Enchanted Zwerchhau',
		icon: 'https://xivapi.com/i/003000/003226.png',
		onGcd: true,
		cooldown: 1500,
		potency: 100, // consumes 15 white, 15 black
		combo: {
			from: 7527,
			potency: 290,
		},
	},
	REDOUBLEMENT: {
		id: 7516,
		name: 'Redoublement',
		icon: 'https://xivapi.com/i/003000/003213.png',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		cooldown: 2500,
		potency: 100,
		combo: {
			from: 7512,
			potency: 230,
			end: true,
		},
	},
	ENCHANTED_REDOUBLEMENT: {
		id: 7529,
		name: 'Enchanted Redoublement',
		icon: 'https://xivapi.com/i/003000/003227.png',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		cooldown: 2200,
		potency: 100, // consumes 15 white, 15 black
		combo: {
			from: 7528,
			potency: 470,
			end: true,
		},
	},
	REPRISE: {
		id: 16529,
		name: 'Reprise',
		icon: 'https://xivapi.com/i/003000/003233.png',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		cooldown: 2500,
		potency: 100,
	},
	ENCHANTED_REPRISE: {
		id: 16528,
		name: 'Enchanted Reprise',
		icon: 'https://xivapi.com/i/003000/003232.png',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		cooldown: 2500,
		potency: 330, // consumes 10 white, 10 black
	},
	VERFLARE: {
		id: 7525,
		name: 'Verflare',
		icon: 'https://xivapi.com/i/003000/003223.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		potency: 580, // Gains 11 Black Mana, if Black is lower 100% Verfire ready
		combo: {
			start: true,
		},
	},
	VERHOLY: {
		id: 7526,
		name: 'Verholy',
		icon: 'https://xivapi.com/i/003000/003224.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		potency: 580, // Gains 11 white, if White is lower 100% Verstone ready
		combo: {
			start: true,
		},
	},
	SCORCH: {
		id: 16530,
		name: 'Scorch',
		icon: 'https://xivapi.com/i/003000/003234.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		potency: 680, // Gains 7 white and black
		combo: {
			from: [7525, 7526],
			potency: 680,
		},
	},
	RESOLUTION: {
		id: 25858,
		name: 'Resolution',
		icon: 'https://xivapi.com/i/003000/003238.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		potency: 750, // Increase White and Black by 4
		combo: {
			from: 16530,
			potency: 750,
			end: true,
		},
	},
	JOLT: {
		id: 7503,
		name: 'Jolt',
		icon: 'https://xivapi.com/i/003000/003202.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		potency: 170,
		castTime: 2000, // Increase White and Black by 2
		breaksCombo: true,
	},
	JOLT_II: {
		id: 7524,
		name: 'Jolt II',
		icon: 'https://xivapi.com/i/003000/003220.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 2000,
		potency: 310, // Increase White and Black by 2
		breaksCombo: true,
	},
	IMPACT: {
		id: 16526,
		name: 'Impact',
		icon: 'https://xivapi.com/i/003000/003222.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 5000,
		potency: 210, // Increase White and Black by 3
		breaksCombo: true,
	},
	VERTHUNDER: {
		id: 7505,
		name: 'Verthunder',
		icon: 'https://xivapi.com/i/003000/003203.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 5000,
		potency: 360, // Increase Black by 6
		breaksCombo: true,
	},
	VERTHUNDER_II: {
		id: 16524,
		name: 'Verthunder II',
		icon: 'https://xivapi.com/i/003000/003229.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 2000,
		potency: 140, // Increase Black by 7
		breaksCombo: true,
	},
	VERTHUNDER_III: {
		id: 25855,
		name: 'Verthunder III',
		icon: 'https://xivapi.com/i/003000/003235.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 5000,
		potency: 350, // Increase Black by 6
		breaksCombo: true,
	},
	VERFIRE: {
		id: 7510,
		name: 'Verfire',
		icon: 'https://xivapi.com/i/003000/003208.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 2000,
		potency: 330, // Increase Black by 5
		breaksCombo: true,
	},
	VERAERO: {
		id: 7507,
		name: 'Verareo',
		icon: 'https://xivapi.com/i/003000/003205.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 5000,
		potency: 360, // Increase White by 6
		breaksCombo: true,
	},
	VERAERO_II: {
		id: 16525,
		name: 'Veraero II',
		icon: 'https://xivapi.com/i/003000/003230.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 2000,
		potency: 140, // Increase White by 7
		breaksCombo: true,
	},
	VERAERO_III: {
		id: 25856,
		name: 'Verareo III',
		icon: 'https://xivapi.com/i/003000/003236.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 5000,
		potency: 380, // Increase White by 6
		breaksCombo: true,
	},
	VERSTONE: {
		id: 7511,
		name: 'Verstone',
		icon: 'https://xivapi.com/i/003000/003209.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 2000,
		potency: 330, // Increase White by 5
		breaksCombo: true,
	},
	SCATTER: {
		id: 7509,
		name: 'Scatter',
		icon: 'https://xivapi.com/i/003000/003207.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 5000,
		potency: 120, // Increase White and black by 3
		breaksCombo: true,
	},
	MOULINET: {
		id: 7513,
		name: 'Moulinet',
		icon: 'https://xivapi.com/i/003000/003215.png',
		onGcd: true,
		speedAttribute: Attribute.SKILL_SPEED,
		cooldown: 2500,
		potency: 60,
		breaksCombo: true,
	},
	ENCHANTED_MOULINET: {
		id: 7530,
		name: 'Enchanted Moulinet',
		icon: 'https://xivapi.com/i/003000/003228.png',
		onGcd: true,
		cooldown: 1500,
		potency: 130, // Costs 20 White and Black
		breaksCombo: true,
	},
	VERCURE: {
		id: 7514,
		name: 'Vercure',
		icon: 'https://xivapi.com/i/003000/003216.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 2000,
		potency: 350,
		breaksCombo: true,
	},
	VERRAISE: {
		id: 7523,
		name: 'Verraise',
		icon: 'https://xivapi.com/i/003000/003221.png',
		onGcd: true,
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 2500,
		castTime: 10000,
		breaksCombo: true,
	},
	MAGICK_BARRIER: {
		id: 25857,
		name: 'Magick Barrier',
		icon: 'https://xivapi.com/i/003000/003237.png',
		speedAttribute: Attribute.SPELL_SPEED,
		cooldown: 120000,
		statusesApplied: ['MAGICK_BARRIER'],
	},
})
