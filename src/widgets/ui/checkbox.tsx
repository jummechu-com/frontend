interface CheckboxProps {
	id: string
	checked: boolean
}

export default function Checkbox({ id, checked }: CheckboxProps) {
	return (
		<div className={'customCheckbox'}>
			<input type="checkbox" id={id} checked={checked} />
			<label htmlFor={id} className={`${checked ? 'checked' : ''}`}></label>
		</div>
	)
}
