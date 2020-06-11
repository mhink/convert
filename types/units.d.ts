// THIS IS AN AUTOGENERATED FILE, DO NOT EDIT MANUALLY
// Also, if you know how to do the typesafety without a massive declaration file, PLEASE contact the authors!
// We would love your advice on improving this!
// Maybe this is useful? https://stackoverflow.com/a/45257357/10808983

import {ConverterBody, ArrayBuiltIns, Unit} from './common';

export type ValidTimeUnits =
	| 'second'
	| 'seconds'
	| 's'
	| 'century'
	| 'centuries'
	| 'c'
	| 'day'
	| 'days'
	| 'd'
	| 'decade'
	| 'decades'
	| 'dec'
	| 'fortnight'
	| 'fortnights'
	| 'fn'
	| 'helek'
	| 'halakim'
	| 'hour'
	| 'hours'
	| 'h'
	| 'jiffy'
	| 'jiffies'
	| 'j'
	| 'ja'
	| 'ke'
	| 'millennium'
	| 'millennia'
	| 'milliday'
	| 'millidays'
	| 'md'
	| 'minute'
	| 'minutes'
	| 'min'
	| 'moment'
	| 'moments'
	| 'month'
	| 'months'
	| 'mo'
	| 'shake'
	| 'shakes'
	| 'sigma'
	| 'sigmas'
	| 'svedberg'
	| 'svedbergs'
	| 'S'
	| 'week'
	| 'weeks'
	| 'wk'
	| 'year'
	| 'years'
	| 'a'
	| 'y'
	| 'yr'
	| 'petasecond'
	| 'petaseconds'
	| 'Ps'
	| 'terasecond'
	| 'teraseconds'
	| 'Ts'
	| 'gigasecond'
	| 'gigaseconds'
	| 'Gs'
	| 'megasecond'
	| 'megaseconds'
	| 'Ms'
	| 'kilosecond'
	| 'kiloseconds'
	| 'ks'
	| 'hectosecond'
	| 'hectoseconds'
	| 'hs'
	| 'decasecond'
	| 'decaseconds'
	| 'das'
	| 'decisecond'
	| 'deciseconds'
	| 'ds'
	| 'centisecond'
	| 'centiseconds'
	| 'cs'
	| 'millisecond'
	| 'milliseconds'
	| 'ms'
	| 'microsecond'
	| 'microseconds'
	| 'μs'
	| 'nanosecond'
	| 'nanoseconds'
	| 'ns'
	| 'picosecond'
	| 'picoseconds'
	| 'ps'
	| 'femtosecond'
	| 'femtoseconds'
	| 'fs';
export type ValidLengthUnits =
	| 'meter'
	| 'metre'
	| 'm'
	| 'petameter'
	| 'petameters'
	| 'Pm'
	| 'terameter'
	| 'terameters'
	| 'Tm'
	| 'gigameter'
	| 'gigameters'
	| 'Gm'
	| 'megameter'
	| 'megameters'
	| 'Mm'
	| 'kilometer'
	| 'kilometers'
	| 'km'
	| 'hectometer'
	| 'hectometers'
	| 'hm'
	| 'decameter'
	| 'decameters'
	| 'dam'
	| 'decimeter'
	| 'decimeters'
	| 'dm'
	| 'centimeter'
	| 'centimeters'
	| 'cm'
	| 'millimeter'
	| 'millimeters'
	| 'mm'
	| 'micrometer'
	| 'micrometers'
	| 'μm'
	| 'nanometer'
	| 'nanometers'
	| 'nm'
	| 'picometer'
	| 'picometers'
	| 'pm'
	| 'femtometer'
	| 'femtometers'
	| 'fm';
export type ValidDataUnits =
	| 'byte'
	| 'bytes'
	| 'B'
	| 'bit'
	| 'bits'
	| 'b'
	| 'crumb'
	| 'crumbs'
	| 'nibble'
	| 'nibbles'
	| 'word'
	| 'words'
	| 'petabyte'
	| 'petabytes'
	| 'PB'
	| 'terabyte'
	| 'terabytes'
	| 'TB'
	| 'gigabyte'
	| 'gigabytes'
	| 'GB'
	| 'megabyte'
	| 'megabytes'
	| 'MB'
	| 'kilobyte'
	| 'kilobytes'
	| 'kB'
	| 'hectobyte'
	| 'hectobytes'
	| 'hB'
	| 'decabyte'
	| 'decabytes'
	| 'daB'
	| 'pebibyte'
	| 'pebibytes'
	| 'PiB'
	| 'tebibyte'
	| 'tebibytes'
	| 'TiB'
	| 'gibibyte'
	| 'gibibytes'
	| 'GiB'
	| 'mibibyte'
	| 'mibibytes'
	| 'MiB'
	| 'kibibyte'
	| 'kibibytes'
	| 'KiB'
	| 'pebibit'
	| 'pebibits'
	| 'Pib'
	| 'tebibit'
	| 'tebibits'
	| 'Tib'
	| 'gibibit'
	| 'gibibits'
	| 'Gib'
	| 'mibibit'
	| 'mibibits'
	| 'Mib'
	| 'kibibit'
	| 'kibibits'
	| 'Kib';
export type AllUnits = ValidTimeUnits | ValidLengthUnits | ValidDataUnits;

export interface Converter<Q> {
	from(fromUnit: ValidTimeUnits): ConverterBody<ValidTimeUnits, Q>;
	from(fromUnit: ValidLengthUnits): ConverterBody<ValidLengthUnits, Q>;
	from(fromUnit: ValidDataUnits): ConverterBody<ValidDataUnits, Q>;
}

type _GetAliases<T extends readonly Unit[]> = {
	0: {
		[K in Exclude<keyof T, ArrayBuiltIns>]: T[K] extends {
			aliases: infer A;
		}
			? A
			: never;
	};
	1: _GetAliases<T>[0][keyof _GetAliases<T>[0]];
	2: _GetAliases<T>[1][Exclude<keyof _GetAliases<T>[1], ArrayBuiltIns>];
};

export type GetAliases<T extends readonly Unit[]> = _GetAliases<T>[2];
